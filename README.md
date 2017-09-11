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

## Usage

Pass along any options that you would ordinarily pass directly to `eslint`, e.g.:

`eslint-closest-cli --help`

`eslint-closest-cli *.js`

## TODOs

 * Limit unecessary path traversal by using a generator-based version of
    find-node-modules.
