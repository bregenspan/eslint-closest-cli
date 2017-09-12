#!/usr/bin/env node

const findup = require('findup-sync');
const eslintPath = findup('node_modules/.bin/eslint') || 'eslint';
require(eslintPath);
