eslint-closest-cli
==================

Wrapper for ESLint CLI. Finds the closest copy of ESLint to the current working directory
and executes it.

This can be useful if you use a monorepo project structure like the following,
in which the parent project is responsible for ESLint config (including locally-installed
ESLint) and the child project simply inherits it:

```
PARENT_PROJECT
  \
  package.json [package.json with "eslint"]
  .eslintrc
  CHILD_PROJECT
    \
    package.json [package.json without "eslint"]
```

In such a case, tools that check for `$(npm-bin)/eslint`, or that add `$(pwd)/node_modules/.bin` to the PATH,
can't find the local ESLint CLI and end up falling back to a global install.

## Installation

`npm install -g eslint-closest-cli`

## Usage

Pass along any options that you would ordinarily pass directly to `eslint`, e.g.:

`eslint-closest-cli --help`

`eslint-closest-cli *.js`
