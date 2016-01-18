# react-example
A dead simple React/ES6/Webpack example

## Usage

```
$ git clone git@github.com:GRT/react-example.git
$ cd react-example
$ npm i
$ npm run build
```
Open `index.html` in your browser.

## Basic Concepts

### React
We'll dive deeper elsewhere, but suffice it to say, [React](https://facebook.github.io/react/) is the library we'll use to compose our user interface in this example.

### ES6/JSX/Babel
We'll author source in [ES6](https://nodejs.org/en/docs/es6/) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and use [Babel](https://babeljs.io/) to transpile our modules to browser runnable ES5.

### Webpack
[Webpack is a module bundler](https://webpack.github.io/) that we'll use to assemble all our modules into a single `bundle.js` file that you'll seein `/dist/bundle/js` and [linked in our index.html](https://github.com/GRT/react-example/blob/master/index.html#L10).
We'll also use webpack to apply Babel ES6 and JSX transpilation. Check out [webpack.config.js](https://github.com/GRT/react-example/blob/master/webpack.config.js).

### NPM Scripts
We'll use [NPM as our task running tool](https://docs.npmjs.com/misc/scripts).  This allows us to avoid dependencies on external tools like Grunt and Gulp while still getting a lot of task automation convenience. 

---

[Pong module](https://github.com/ohall/react-pong)
