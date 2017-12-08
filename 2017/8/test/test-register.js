/*jshint node:true */
'use strict';

const assert = require('assert');
const register = require('../register');

const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

describe('Will test circus', () => {
    it(`Will test the circus with this input\n${input}`, () => {
      assert.equal(register(input), 1);
    });
});
