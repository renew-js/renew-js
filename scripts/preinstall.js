/*
 * source: https://stackoverflow.com/questions/31773546
 */

const fs = require('fs');
const resolve = require('path').resolve;
const join = require('path').join;
const cp = require('child_process');
const os = require('os');
const lib = resolve('.');

async function installModule(name) {
    await new Promise((resolve, reject) => {
        const modPath = join(lib, name);

        if (fs.existsSync(join(modPath, 'package.json'))) {
            console.log('Installing submodule', name);
            const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';
            const out = cp.spawnSync(npmCmd, [ 'i' ], {
                env: process.env,
                cwd: modPath,
                stdio: 'inherit'
            });

            if (out.error) {
                reject(out.error);
            }
            console.log('Done', name);
            resolve();
        }
    });
}

async function installModules() {
    await Promise.all(fs.readdirSync(lib).map(installModule));
}

installModules().then(() => {
    console.log('Done installing submodules');
}).catch((err) => {
    console.error('Failed installing submodules', err);
    process.exit(1);
});
