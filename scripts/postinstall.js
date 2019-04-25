const fs = require('fs');
const resolve = require('path').resolve;
const join = require('path').join;
const cp = require('child_process');
const os = require('os');

const dir = resolve('.');
const cmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';
const modules = [];

fs.readdirSync(dir).forEach((module) => {
    const cwd = join(dir, module);

    if (fs.existsSync(join(cwd, 'package.json'))) {
        modules.push(module);
    }
});

modules.forEach((parent) => {
    const cwd = join(dir, parent);

    modules.forEach((child) => {
        if (fs.existsSync(join(cwd, 'node_modules/' + child))) {
            cp.spawn(cmd, [ 'link', '../' + child ], {
                env: process.env,
                cwd: cwd,
                stdio: 'inherit'
            });
        }
    });
});
