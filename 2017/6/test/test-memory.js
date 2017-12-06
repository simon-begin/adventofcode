/*jshint node:true */
'use strict';

const assert = require('assert');
const memory = require('../memory');

describe('Will test memory', () => {
    it('Will test the sequence 0 2 7 0', () => {
      assert.equal(memory('0 2 7 0'), 5);
    });
    it('Will test the sequence 0 2 7 0 in alt mode', () => {
      assert.equal(memory('0 2 7 0', true), 4);
    });
});
