const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = 'audit_output.txt';
const SRC_ROOT = 'src';
const COMPONENTS_ROOT = 'components';

// Map: normalized_src_path_no_ext -> new_import_path (@/components/...)
const pathMap = new Map();
// Map: new_file_path -> old_src_path (to resolve relative imports correctly)
const newToOldPath = new Map();

function normalize(p) {
    return p.replace(/\\/g, '/');
}

function stripExt(p) {
    const ext = path.extname(p);
    return ext ? p.slice(0, -ext.length) : p;
}

// 1. Build Map
if (fs.existsSync(OUTPUT_FILE)) {
    const lines = fs.readFileSync(OUTPUT_FILE, 'utf8').split('\n');
    lines.forEach(line => {
        const match = line.match(/^\[(SERVER|CLIENT)\]\s+(.*?)(\s+\(Explicit\))?$/);
        if (match) {
            const type = match[1];
            const oldPath = match[2].trim(); // src/...
            const isClient = type === 'CLIENT';

            // New path relative to next-app root
            // oldPath: src/components/ui/button.jsx
            // relPath: components/ui/button.jsx
            let relPathStr = oldPath.startsWith('src/') ? oldPath.slice(4) : oldPath;

            // Fix: strip components/ if present, to match migration script
            if (relPathStr.startsWith('components/')) {
                relPathStr = relPathStr.slice(11);
            }

            const destDir = isClient ? 'components/client' : 'components/server';
            const newPath = path.join(destDir, relPathStr);

            // Store for checking imports
            // Key: src/components/ui/button (no ext) -> @/components/server/ui/button
            const key = stripExt(normalize(oldPath));
            const importPath = '@/' + normalize(newPath).replace(/\.[^/.]+$/, ""); // strip ext for import

            pathMap.set(key, importPath);
            pathMap.set(key + '/index', importPath); // handle index resolution if needed

            newToOldPath.set(normalize(newPath), normalize(oldPath));
        }
    });
}

// 2. Scan and Replace
function scanAndFix(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanAndFix(fullPath);
        } else if (/\.(js|jsx|ts|tsx)$/.test(item)) {
            fixImports(fullPath);
        }
    });
}

function fixImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Regex for imports: import ... from "..."
    // valid: import x from "y"; import "y"; export ... from "y";
    // dynamic: import("y")
    const importRegex = /(import\s+(?:[\s\S]*?from\s+)?|export\s+(?:[\s\S]*?from\s+)?|require\(|import\()['"]([^'"]+)['"]\)?/g;

    // We need old path of THIS file to resolve relative imports
    // We need old path of THIS file to resolve relative imports
    const normalizedFilePath = normalize(filePath);
    let oldFilePath = newToOldPath.get(normalizedFilePath);

    if (!oldFilePath) {
        // Fallback: If file isn't in map (e.g. new app/ file), assume it is where it is
        // This allows us to resolve relative imports like ../../src/... from its current location
        oldFilePath = normalizedFilePath;
    }
    const oldDir = path.dirname(oldFilePath);

    content = content.replace(importRegex, (match, prefix, importPath) => {
        // Resolve importPath to absolute src path
        let resolvedOldPath = null;

        if (importPath.startsWith('.')) {
            // Relative
            resolvedOldPath = path.join(oldDir, importPath);
        } else if (importPath.startsWith('@/')) {
            // Absolute alias (assuming @ was src)
            resolvedOldPath = importPath.replace('@/', 'src/');
        } else {
            // Node module or other alias?
            // If it's 'react' etc, ignore
            return match;
        }

        // Normalize
        resolvedOldPath = normalize(resolvedOldPath);

        // Check map (try stripping ext)
        // resolvedOldPath might be src/components/ui/button
        // Map keys are src/components/ui/button

        // Try exact first
        let newImport = pathMap.get(resolvedOldPath);
        // Try stripping ext
        if (!newImport) newImport = pathMap.get(stripExt(resolvedOldPath));
        // Try adding /index
        if (!newImport) newImport = pathMap.get(resolvedOldPath + '/index');

        if (newImport) {
            changed = true;
            // Reconstruct import statement
            // prefix contains 'import ... from ' or 'import('
            // match is the whole string. 
            // We replace the importPath part.
            // Be careful with parens in prefix
            const quote = match.includes("'") ? "'" : '"';
            const closing = match.trim().endsWith(')') ? ')' : '';
            return `${prefix}${quote}${newImport}${quote}${closing}`;
        }

        return match;
    });

    if (changed) {
        console.log(`Fixed imports in ${filePath}`);
        fs.writeFileSync(filePath, content);
    }
}

// Start scanning absolute 'components' dir
// Also 'app' dir if we want
scanAndFix('components');
scanAndFix('app'); // in case we move stuff there or update layout
scanAndFix('lib'); // if lib files refer to components

console.log('Import fix complete.');
