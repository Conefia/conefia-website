const fs = require('fs');
const path = require('path');

const CLIENT_COMPONENTS = path.join('components', 'client', 'components');
const SERVER_COMPONENTS = path.join('components', 'server', 'components');
const CLIENT_ROOT = path.join('components', 'client');
const SERVER_ROOT = path.join('components', 'server');

function moveContents(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) return;

    const items = fs.readdirSync(srcDir);
    items.forEach(item => {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);

        console.log(`Moving ${srcPath} -> ${destPath}`);
        fs.renameSync(srcPath, destPath);
    });

    fs.rmdirSync(srcDir);
}

moveContents(CLIENT_COMPONENTS, CLIENT_ROOT);
moveContents(SERVER_COMPONENTS, SERVER_ROOT);
console.log('Cleanup complete.');
