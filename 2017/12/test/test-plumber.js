/*jshint node:true */
'use strict';

const assert = require('assert');
const plumber = require('../plumber');

const input = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`;

describe('Will test plumber', () => {
    it(`Will test with this input ${input}`, () => {
      assert.equal(plumber(input), 6);
    });
    it(`Will test plumber alt with this input ${input}`, () => {
      assert.equal(plumber(input, true), 2);
    });
});
