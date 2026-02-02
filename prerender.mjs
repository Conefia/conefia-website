import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const ROUTES = ['/', '/about', '/contact'];
const DIST_FOLDER = 'dist';
const PORT = 4173;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
    console.log('🚀 Starting Prerender...');

    // 1. Start the server
    // We pipe stdout/stderr so you can see if the server crashes!
    const server = spawn('npx', ['serve', DIST_FOLDER, '-s', '-p', PORT], {
        stdio: 'inherit', // <--- This lets us see the server logs
        shell: true       // <--- Helps on some Linux setups
    });

    console.log(`⏳ Waiting 5 seconds for server to start on port ${PORT}...`);
    await new Promise(r => setTimeout(r, 5000)); // Increased wait time

    // 2. Launch Browser
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    for (const route of ROUTES) {
        try {
            console.log(`📸 Prerendering: ${route}`);
            // Increased timeout to 60s in case the machine is slow
            await page.goto(`http://localhost:${PORT}${route}`, {
                waitUntil: 'networkidle0',
                timeout: 60000
            });

            const html = await page.content();
            const filePath = route === '/'
                ? path.join(__dirname, DIST_FOLDER, 'index.html')
                : path.join(__dirname, DIST_FOLDER, route.substring(1), 'index.html');

            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(filePath, html);
            console.log(`   -> Saved to ${filePath}`);

        } catch (e) {
            console.error(`❌ Failed to render ${route}:`, e.message);
        }
    }

    console.log('✅ Prerendering complete!');

    await browser.close();

    // Force kill the server process group
    if (server.pid) {
        try {
            process.kill(-server.pid);
        } catch (e) {
            server.kill();
        }
    }
    process.exit(0);
}

main();