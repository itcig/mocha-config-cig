'use strict';
module.exports = {
    diff: true,
    exit: true,
    extension: ['js', 'ts', 'tsx'],
    opts: false,
    package: './package.json',
    recursive: true,
    require: ['ts-node/register', 'esm'],
    reporter: 'spec',
    slow: 75,
    timeout: 5000,
    'watch-files': ['src/**/*.js', 'src/**/*.ts', 'tests/**/*.js', 'tests/**/*.ts'],
    'watch-ignore': ['dist', 'vendor'],
};
//# sourceMappingURL=index.js.map