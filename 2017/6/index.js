/*jshint node:true */
'use strict';

const stdio = require('stdio');
const maze = require('./memory');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (ops.input) {
  console.log(maze(ops.input, ops.alt));
}
