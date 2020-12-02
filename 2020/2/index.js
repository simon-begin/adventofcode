/*jshint node:true */
'use strict';

const stdio = require('stdio');
const puzzle = require('./puzzle');

let opts  = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
  'alt': {key: 'a', args: 1, 'description': 'Activate alt progression'},
});

if (opts.input) {
  opts.alt ? console.log(puzzle.puzzle2(opts.input)) : console.log(puzzle.puzzle1(opts.input));
}
