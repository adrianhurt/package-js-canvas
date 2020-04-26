# @adrianhurt/package-js-canvas

A simple template for a JS package with:

-   [Prettier](https://prettier.io)
-   [ESLint](https://eslint.org)
-   [Airbnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
-   [Jest](https://jestjs.io)
-   [Husky](https://github.com/typicode/husky) for git hooks
-   [Commitlint](https://commitlint.js.org) (to ensure [Conventional Commits](https://www.conventionalcommits.org))

## Install

```
$ npm install @adrianhurt/package-js-canvas
```

or

```
$ yarn add @adrianhurt/package-js-canvas
```

## Usage

```js
import pingpong from '@adrianhurt/package-js-canvas

console.log(pingpong('foo')); // => you need to say ping
console.log(pingpong('ping')); // => pong!
```
