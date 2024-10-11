# Webpack library starter

Webpack based boilerplate for producing libraries (Input: ES6, Output: universal library)

![Travis](https://travis-ci.org/krasimir/webpack-library-starter.svg?branch=master)

## Features

* Webpack 5 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* Linting with [ESLint](http://eslint.org/).

## Process

```
ES6 source files
       |
       |
    webpack
       |
       +--- babel, eslint
       |
  ready to use
     library
  in umd format
```

*Have in mind that you have to build your library before publishing. The files under the `lib` folder are the ones that should be distributed.*

## Getting started

1. Setting up the name of your library
  * Open `webpack.config.js` file and change the value of `libraryName` variable.
  * Open `package.json` file and change the value of `main` property so it matches the name of your library.
2. Get Sstarted
  Run the `init.sh` script.

  ```bash
  ./init.sh
  ```

## Scripts

* `yarn build` or `npm run build` - produces production version of your library under the `lib` folder

## Testing in Search

1. Clone [mlibrary/search](https://github.com/mlibrary/search).
    ```bash
    gh repo clone mlibrary/search
    ```
2. Navigate to the repository and open the `package.json` file. Edit the dependency URL for `prejudice` to point to your local `prejudice` repository.
    ```bash
    "prejudice": "file:../prejudice",
    ```
    Note: If you want to test a specific branch, add `#` followed by the branch name to the end of the URL.
    ```bash
    "prejudice": "git+https://github.com/mlibrary/prejudice.git#your-branch-here",
    ```
3. Install
    ```bash
    npm install
    ```
    Note: If this is not a fresh clone, do a clean install.
    ```bash
    rm -rf node_modules && package-lock.json && npm install
    ```
4. Run locally
    ```bash
    npm start
    ```

While Search is running locally, [the site](http://localhost:3000/) will automatically refresh whenever `lib/prejudice.js` changes.

## Readings

* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)

## Misc

### An example of using dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle

In the following example we are excluding React and Lodash:

```js
{
  devtool: 'source-map',
  output: {
    path: '...',
    libraryTarget: 'umd',
    library: '...'
  },
  entry: '...',
  ...
  externals: {
    react: 'react'
    // Use more complicated mapping for lodash.
    // We need to access it differently depending
    // on the environment.
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
}
```
