# Test Snowpack

This repo demonstrates bundling a React application using [Snowpack](https://www.snowpack.dev/) in a yarn monorepo workspace.

## Issues

There are currently two related issues:

### Issue One

Snowpack fails to start a dev environment where an NPM package is in UMD [react-responsive](https://www.npmjs.com/package/react-responsive)

```
Uncaught SyntaxError: The requested module '../../_snowpack/pkg/react-responsive.v8.2.0.js' does not provide an export named 'useMediaQuery'
```

### Issue Two

Snowpack fails to start a dev environment where a monorepo linked package is transpiled with [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

```
Uncaught SyntaxError: The requested module '../_snowpack/link/packages/test-one/lib/index.js' does not provide an export named 'HelloWorld'
```

## Reproducible Steps

1. Clone the repo and run `yarn install` at the root directory
1. Run `yarn packages:build` to build the two workspace packages transpiled with [Babel](https://babeljs.io/) using [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

### Issue One

1. Run `yarn customer start`

### Issue Two

1. Remove the reference to `useIsMobile` in `App.tsx` where [react-responsive](https://www.npmjs.com/package/react-responsive) is used by commenting out line 11
1. Add `@babel/preset-env` to `babel.config.js` in at least one of the `test-one` or `test-two` workspace package
1. Rebuild the packages by running `yarn packages:build`
1. Run `yarn customer start`

This error would go away if the packages are transpiled without [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).
