const fs = require('fs');
const resolve = require('path').resolve;
const join = require('path').join;
const cp = require('child_process');
const os = require('os');
const rimraf = require('rimraf');

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

    console.log('Clean up', cwd, 'node_modules package-lock.json');
    rimraf(cwd + '/node_modules', () => {
        console.log(parent, 'done clean up', '[node_modules]');
    });
    rimraf(cwd + '/package-lock.json', () => {
        console.log(parent, 'done clean up', '[package-lock]');
    });
});
