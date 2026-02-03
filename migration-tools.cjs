// migration-tool.js
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './src';
const TARGET_DIR = './next-app';

const createDir = (dir) => { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); };

const copyFolder = (src, dest) => {
    if (!fs.existsSync(src)) return;
    createDir(dest);
    fs.readdirSync(src).forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        if (fs.statSync(srcPath).isDirectory()) copyFolder(srcPath, destPath);
        else fs.copyFileSync(srcPath, destPath);
    });
};

console.log('🚀 Starting Migration...');
const appDir = path.join(TARGET_DIR, 'app');
createDir(appDir);
createDir(path.join(TARGET_DIR, 'public'));

const pagesDir = path.join(SOURCE_DIR, 'pages');
if (fs.existsSync(pagesDir)) {
    fs.readdirSync(pagesDir).forEach(page => {
        if (!page.match(/\.jsx?$/)) return;
        const pageName = path.basename(page, path.extname(page));
        const targetFolder = pageName.toLowerCase() === 'home' ? appDir : path.join(appDir, pageName.toLowerCase());
        createDir(targetFolder);

        let content = fs.readFileSync(path.join(pagesDir, page), 'utf-8');
        // Simple automation to flag React Router hooks for manual fix later
        content = content.replace(/import .*react-router-dom.*/g, "// TODO: REPLACE REACT-ROUTER HOOKS\nimport { usePathname } from 'next/navigation'; // Auto-inserted suggestion");
        content = content.replace(/<Link to=/g, '<Link href='); // Basic attempt to fix Links

        fs.writeFileSync(path.join(targetFolder, 'page.jsx'), content);
        console.log(`✅ Created route: /${pageName}`);
    });
}

['components', 'lib', 'utils'].forEach(folder => copyFolder(path.join(SOURCE_DIR, folder), path.join(TARGET_DIR, folder)));

const nextConfig = "/** @type {import('next').NextConfig} */\nconst nextConfig = { output: 'export', images: { unoptimized: true } };\nmodule.exports = nextConfig;";
fs.writeFileSync(path.join(TARGET_DIR, 'next.config.js'), nextConfig);

const layout = "import './globals.css';\nexport const metadata = { title: 'Migrated Site' };\nexport default function RootLayout({ children }) { return <html lang='en'><body>{children}</body></html> }";
fs.writeFileSync(path.join(appDir, 'layout.jsx'), layout);

if (fs.existsSync(path.join(SOURCE_DIR, 'index.css'))) fs.copyFileSync(path.join(SOURCE_DIR, 'index.css'), path.join(appDir, 'globals.css'));

console.log('🎉 File structure created.');