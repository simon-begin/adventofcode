/*jshint node:true */
'use strict';

const stdio = require('stdio');
const passphrase = require('./passphrase');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'},
});

if (ops.input) {
  console.log(passphrase(ops.input));
}
