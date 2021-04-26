# Test Vite

This repo demonstrates bundling a React application using [Vite](https://vitejs.dev/) in a yarn monorepo workspace.

[Vite](https://vitejs.dev/) fails to build when a yarn workspace app with local dependencies are transpiled using [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).

## Reproducible Steps

1. Clone the repo and run `yarn install` at the root directory
1. Run `yarn packages:build` to build the two workspace packages transpiled with [Babel](https://babeljs.io/) using [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
1. Run `yarn customer dev` or `yarn customer build`

The last step would fail to proceed with an error as follows:

```
Error: 'makeThunkFetch' is not exported by ../../packages/test-one/lib/index.js, imported by src/App.tsx
```

This error would go away if the packages are transpiled without [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env).
