/*jshint node:true */
'use strict';

const stdio = require('stdio');
const memory = require('./memory');

let opts  = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (opts.input) {
  console.log(memory(opts.input, opts.alt));
}