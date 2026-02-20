const fs = require('fs');
const path = require('path');

// Configuration
const SRC_DIR = 'src';
const COMPONENTS_DIR = 'components';
const SERVER_DIR = path.join(COMPONENTS_DIR, 'server');
const CLIENT_DIR = path.join(COMPONENTS_DIR, 'client');
const AUDIT_FILE = 'audit_output.txt';

// Helper to copy file
function moveFile(oldPath, newPath) {
    const targetDir = path.dirname(newPath);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    // We use copy+unlink to simulate move across potential partitions (though usually same fs)
    fs.copyFileSync(oldPath, newPath);
    // We don't delete immediately to allow 'import updates' to read old files if needed, 
    // but here we will just process content as we write.
}

// Regex helpers
const REPLACE_ROUTER_IMPORT = /import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"];?/g;
// Basic Router replacements
// We will process file content line by line or largely regex

function processContent(content, isClient) {
    let newContent = content;

    // 1. 'use client' injection
    if (isClient) {
        if (!newContent.includes("'use client'") && !newContent.includes('"use client"')) {
            newContent = "'use client';\n" + newContent;
        }
    }

    // 2. React Router -> Next Navigation
    if (newContent.includes('react-router-dom')) {
        // Replace Link
        if (newContent.includes('Link')) {
            newContent = newContent.replace(/import\s+.*Link.*\s+from\s+['"]react-router-dom['"];?/, "import Link from 'next/link';");
            // Also clean up mixed imports if any: import { Link, useNavigate } ...
            // This simplifiction assumes typical usage. 
            // Better: Remove react-router-dom line and add Next imports based on usage.
        }

        // Remove remaining react-router-dom imports often
        // but let's handle hooks:
        if (newContent.match(/useNavigate/)) {
            newContent = "import { useRouter } from 'next/navigation';\n" + newContent;
            newContent = newContent.replace(/useNavigate\(\)/g, 'useRouter()');
            newContent = newContent.replace(/navigate\(/g, 'router.push(');
            // const navigate = useNavigate(); -> const router = useRouter(); 
            // const navigate = ... -> const router = ...
            newContent = newContent.replace(/const\s+navigate\s+=\s+useNavigate\(\);?/g, 'const router = useRouter();');
            newContent = newContent.replace(/const\s+navigate\s+=\s+useRouter\(\);?/g, 'const router = useRouter();'); // safety
            // Usage: navigate(path) -> router.push(path)
            // This works for simple cases.
        }

        if (newContent.match(/useLocation/)) {
            newContent = "import { usePathname } from 'next/navigation';\n" + newContent;
            newContent = newContent.replace(/useLocation\(\)/g, 'usePathname()');
            newContent = newContent.replace(/const\s+location\s+=\s+useLocation\(\);?/g, 'const pathname = usePathname();');
            // location.pathname -> pathname
            newContent = newContent.replace(/location\.pathname/g, 'pathname');
        }

        // Cleanup react-router-dom line if empty or just purge it?
        // Let's comment it out to be safe and let linter/user see it
        newContent = newContent.replace(/(import\s+.*from\s+['"]react-router-dom['"];?)/g, '// $1');
    }

    // 3. Link 'to' -> 'href'
    // <Link to="..." -> <Link href="..."
    newContent = newContent.replace(/<Link\s+([^>]*?)to=/g, '<Link $1href=');

    // 4. Update internal imports? 
    // This is the hardest part. Files moved from src/components to components/server or client.
    // We will attempt a generic replace for '@/components' -> '@/components/server' (heuristic)? 
    // No, we can't easily know in usage.
    // For now, we will leave import paths alone and rely on alias updates or manual fixes, 
    // or we assume relative imports might still work if structure preserved relative to each other?
    // src/A imports src/B. 
    // A moves to client/A, B moves to server/B.
    // Import "../B" becomes broken if A is in components/client/path and B is in components/server/path.
    // This is complex. 
    // Strategy: We will rewrite imports starting with '@/components' or relative ones if possible.
    // But without a full graph, let's stick to the component strict file moves first.
    // User instruction says "Refactor... verify".

    return newContent;
}

function runMigration() {
    if (!fs.existsSync(AUDIT_FILE)) {
        console.error('Audit file not found!');
        return;
    }

    const auditLines = fs.readFileSync(AUDIT_FILE, 'utf8').split('\n');

    console.log(`Read ${auditLines.length} lines from audit file.`);

    auditLines.forEach(line => {
        // Line format: [SERVER] src/components/ui/button.jsx
        // or [CLIENT] ...
        const match = line.match(/^\[(SERVER|CLIENT)\]\s+(.*?)(\s+\(Explicit\))?$/);
        if (match) {
            const type = match[1];
            const originalPath = match[2].trim();
            if (!originalPath) return;

            const isClient = type === 'CLIENT';

            // Construct new path
            // Remove 'src/' prefix
            let relativePath = originalPath.startsWith('src/') ? originalPath.slice(4) : originalPath;

            // Remove 'components/' prefix if present to avoid nesting
            // We want components/server/ui/button not components/server/components/ui/button
            if (relativePath.startsWith('components/')) {
                relativePath = relativePath.slice(11);
            }

            // Determine destination
            const destRoot = isClient ? CLIENT_DIR : SERVER_DIR;
            const newPath = path.join(destRoot, relativePath);

            console.log(`Migrating ${originalPath} -> ${newPath}`);

            if (fs.existsSync(originalPath)) {
                const content = fs.readFileSync(originalPath, 'utf8');
                const processed = processContent(content, isClient);

                const targetDir = path.dirname(newPath);
                if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

                fs.writeFileSync(newPath, processed);

                // Optional: Delete original? 
                // Let's rename original to .bak to avoid confusion but allow recovery?
                // Or just leave it for now until verified. 
                // Creating .bak sound good.
                fs.renameSync(originalPath, originalPath + '.bak');
            } else {
                console.warn(`File not found (already moved?): ${originalPath}`);
            }
        }
    });
}

runMigration();
