const fs = require('fs');
const path = require('path');

const scanDir = (dir, fileList = []) => {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            scanDir(filePath, fileList);
        } else {
            if (/\.(jsx|tsx|js|ts)$/.test(file)) fileList.push(filePath);
        }
    });
    return fileList;
};

// Adjust 'src' if your old components are elsewhere
const files = scanDir('./src');

const output = [];
const log = (msg) => output.push(msg);

log('\n🔍 COMPONENT AUDIT REPORT (Server-First Protocol)\n');
log('--------------------------------------------------');

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Check for Client-Side indicators
    const hasHooks = /use(State|Effect|Context|Reducer|Callback|Memo|Ref|LayoutEffect)/.test(content);
    // Refined regex to avoid false positives on imports or non-hook usages if possible, but keeping it simple as per request
    const hasRouter = /use(Location|Navigate|Params|SearchParams)/.test(content);
    // Simple check for event handlers
    const hasEvents = /on[A-Z][a-zA-Z]+=/.test(content);
    // Check for window/document, but careful with SSR checks like (typeof window !== 'undefined')
    const hasBrowser = /(window\.|document\.|localStorage\.)/.test(content);

    const isClient = hasHooks || hasRouter || hasEvents || hasBrowser;

    if (isClient) {
        // Check if it already has 'use client'
        if (content.includes("'use client'") || content.includes('"use client"')) {
            log(`[CLIENT] ${file} (Explicit)\n  ↳ Reason: 'use client' directive found.\n  ↳ ACTION: Move to /components/client.\n`);
        } else {
            log(`[CLIENT] ${file}\n  ↳ Reason: ${[hasHooks ? 'Hooks' : '', hasRouter ? 'Router' : '', hasEvents ? 'Events' : '', hasBrowser ? 'Browser-API' : ''].filter(Boolean).join(', ')}\n  ↳ ACTION: Move to /components/client, add 'use client' to top.\n`);
        }
    } else {
        log(`[SERVER] ${file}\n  ↳ Reason: No client-side logic detected.\n  ↳ ACTION: Move to /components/server (Default).\n`);
    }
});

log('--------------------------------------------------');
fs.writeFileSync('audit_output.txt', output.join('\n'));
console.log('Audit complete. Check audit_output.txt');
