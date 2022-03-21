'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = {
    diff: true,
    extension: ['js', 'ts', 'tsx'],
    opts: false,
    package: './package.json',
    recursive: true,
    require: ['ts-node/register', 'esm'],
    reporter: 'spec',
    slow: 75,
    timeout: 5000,
};
module.exports = function mochaConfigCig(options = defaultOptions) {
    return {
        ...defaultOptions,
        ...options,
        extension: [...(defaultOptions.extension || []), ...(options.extension || [])],
        require: [...(defaultOptions.require || []), ...(options.require || [])],
    };
};
//# sourceMappingURL=index.js.map