/*jshint node:true */
'use strict';

const assert = require('assert');
const permutation = require('../permutation');

describe('Will test the dancing permutation', () => {
    it(`Will do a spin (s1)`, () => {
      assert.equal(permutation(`s1`, false, 5), 'eabcd');
    });
    it(`Will do a s1 and x3/4`, () => {
      assert.equal(permutation(`s1,x3/4`, false, 5), 'eabdc');
    });
    it(`Will do s1 x3/4 and pe/b`, () => {
      assert.equal(permutation(`s1,x3/4,pe/b`, false, 5), 'baedc');
    });
});
