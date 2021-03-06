/*jshint node:true */
'use strict';

const stdio = require('stdio');
const inverseCaptcha = require('./inverse-captcha');

let ops = stdio.getopt({
  'input': {key: 'i', args: 1, mandatory: true, description: 'Puzzle input'},
  'halfway': {key: 'h', args: 1, description: 'Put true to activate halfway'}
});

if (ops.input) {
  console.log(inverseCaptcha(ops.input, ops.halfway));
}
