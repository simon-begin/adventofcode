/*jshint node:true */
'use strict';

const assert = require('assert');
const scanner = require('../scanner');

const input = `0: 3
1: 2
4: 4
6: 4`;

describe('Will test the severity', () => {
    it(`Will test with this input\n${input}`, () => {
      assert.equal(scanner(input), 24);
    });
    it(`Will test with this input to find the delay\n${input}`, () => {
      assert.equal(scanner(input, true), 10);
    });
});
