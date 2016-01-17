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

### ES6/JSX/Babel
We'll author our source in [ES6](https://nodejs.org/en/docs/es6/) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and use [Babel](https://babeljs.io/) to tranpile our modules to browser runnable ES5.

### Webpack
Webpack is a module bundler that we'll use to assemble all our modules into a single `bundle.js` file that you'll seein `/dist/bundle/js`.
We'll also use this tool to apply Babel transpilation.

### NPM Scripts
We'll use NPM as our task running tool.  This allows us to avoid dependencies on external tools like Grunt and Gulp while still getting a lot of the task automation goodness. 