/*jshint node:true */
'use strict';

const stdio = require('stdio');
const checksum = require('./checksum');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, description: 'Puzzle input'},
  'divide': {key: 'd', args: 1, description: 'Enable checksum divide'}
});

if (ops.input) {
  console.log(checksum(ops.input, ops.divide));
}
