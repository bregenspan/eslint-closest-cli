#!/usr/bin/env node

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const process = require('process');
const findNodeModules = require('find-node-modules');

const modules = findNodeModules();

function getESLintPath (modulePath) {
  return path.resolve(path.join(modulePath, '.bin', 'eslint'));
}

const nearestModulePath = modules.find((modulePath) => {
  return fs.existsSync(getESLintPath(modulePath));
});

const args = process.argv.slice(2);

const eslintPath = nearestModulePath ? getESLintPath(nearestModulePath) : 'eslint';

childProcess.spawn(eslintPath, args, {
  cwd: process.cwd,
  env: process.env,
  stdio: 'inherit'
});
