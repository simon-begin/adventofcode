/*jshint node:true */
'use strict';

const stdio = require('stdio');
const spiralMemory = require('./spiral-memory');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'square': {key: 's', args: 1, 'description': 'Square mode'}
});

if (ops.input) {
  console.log(spiralMemory(ops.input, ops.square));
}
