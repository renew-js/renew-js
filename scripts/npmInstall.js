/*
 * source: https://stackoverflow.com/questions/31773546
 */

const fs = require('fs');
const resolve = require('path').resolve;
const join = require('path').join;
const cp = require('child_process');
const os = require('os');
const lib = resolve('.');

fs.readdirSync(lib).forEach((mod) => {
    const modPath = join(lib, mod);

    if (fs.existsSync(join(modPath, 'package.json'))) {
        const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';
        cp.spawn(npmCmd, [ 'i' ], {
            env: process.env,
            cwd: modPath,
            stdio: 'inherit'
        });
    }
});
