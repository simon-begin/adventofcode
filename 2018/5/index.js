/*jshint node:true */
'use strict';

const stdio = require('stdio');
const reduction = require('./reduction');

let opts  = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (opts.input) {
  console.log(reduction(opts.input, opts.alt));
}