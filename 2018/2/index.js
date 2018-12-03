/*jshint node:true */
'use strict';

const stdio = require('stdio');
const checksum = require('./checksum');

let opts  = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (opts.input) {
  console.log(checksum(opts.input, opts.alt));
}