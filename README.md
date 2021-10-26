# mocha-config-cig

This package provides Capitol Information Group's base JS _**.mocharc**_ as an
extensible shared config.

## Usage

Our default export contains all of our Mocha configuration. It requires `mocha`
and `chai`.

Install the correct versions of each package by running:

```sh
npx install-peerdeps --dev @itcig/mocha-config-cig
```

2. Add `"extends": "@itcig/mocha-config-cig"` to your _**.mocharc**_.
