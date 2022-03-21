'use strict';

import { MochaOptions } from 'mocha';

interface CigMochaOptions extends MochaOptions {
  [key: string]: any;
}

// These default options are the baseline for all apps and some are required for packages to function properly
const defaultOptions: CigMochaOptions = {
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

// TODO: The MochaOptions Interface doesn't all keys like 'extensions', 'opts',
//  'package', 'watch-files', 'watch-ignore'
//  The Mocha JS that gets the resulting object from this does accept
//  those keys, so for now this will not have a typed return to avoid TS errors
module.exports = function mochaConfigCig(options: CigMochaOptions = defaultOptions) {
  // Allow overwriting root keys with single values and extending keys that have iterables
  return {
    ...defaultOptions,
    ...options,
    extension: [...(defaultOptions.extension || []), ...(options.extension || [])],
    require: [...(defaultOptions.require || []), ...(options.require || [])],
  };
};
