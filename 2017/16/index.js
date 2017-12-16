/*jshint node:true */
'use strict';

const stdio = require('stdio');
const permutation = require('./permutation');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (ops.input) {
  console.log(permutation(ops.input, ops.alt));
}
