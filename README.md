# react17-snowpack3-tsx4-scss
minimal template for Snowpack 3 with React 17 , TypeScript 4 TSX &amp; SCSS modules

> ✨ Bootstrapped with Create Snowpack App (CSA).

To learn React, check out the [React 17 documentation](https://reactjs.org/).

To learn [TypeScript 4.1](https://www.typescriptlang.org/docs)

To learn [Scss](https://sass-lang.com/documentation)

## Installation

`npm install`
and then:
`npm start`
or
`npm run build`


## Snowpack

Snowpack is a lightning-fast frontend build tool, designed to leverage JavaScript's native module system (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">known as ESM</a>). It is an alternative to heavier, more complex bundlers like webpack or Parcel in your development workflow.

### this is Snowpack 3.0 RC2 (snowpack@next)
https://www.snowpack.dev/posts/2020-12-03-snowpack-3-release-candidate

### Key Features

- Develop faster, with a dev server that starts up in **50ms or less.**
- See changes reflected [instantly in the browser.](https://www.snowpack.dev/concepts/hot-module-replacement)
- Integrate your favorite bundler for a [production-optimized build.](https://www.snowpack.dev/concepts/build-pipeline)
- Enjoy out-of-the-box support for [TypeScript, JSX, CSS Modules and more.](https://www.snowpack.dev/reference/supported-files)
- Connect your favorite tools with [third-party plugins.](https://www.snowpack.dev/plugins)

** More info at the official [Snowpack website ➞](https://snowpack.dev)**


`snowpack --help`

** snowpack currently doesn't have ssr static export like react-snap/next.js **

## State Managment: MobX-keystone State Tree

[MobX-keystone](https://mobx-keystone.js.org/)

uses typescript Class models, are like objects but enhanced with local behaviors (actions/views) and life-cycle events (hooks).

based on [MobX 6](https://mobx.js.org/README.html)

```
@model("App/Todo")
export class Todo extends Model({
  text: prop<string>({ setterAction: true }),
  done: prop(false, { setterAction: true }),
}) {}
const myTodo = new Todo({ text: "" })
```


keystone uses internally:
createAtom("rootStore"), observable.object(), reaction, 
& action, computed,  , runInAction

https://mobx.js.org/custom-observables.html


## UI: React Bootstrap / Ant Design / Tailwind CSS


## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.


### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
