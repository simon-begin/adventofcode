/*jshint node:true */
'use strict';

const assert = require('assert');
const spiralMemory = require('../spiral-memory');

describe('Will test spiral-memory', () => {
  describe('Will test normal spiral-memory', () => {
    it('Will test the sequence 1', () => {
      assert.equal(spiralMemory(1), 0);
    });
    it('Will test the sequence 12', () => {
      assert.equal(spiralMemory(12), 3);
    });
    it('Will test the sequence 23', () => {
      assert.equal(spiralMemory(23), 2);
    });
    it('Will test the sequence 1024', () => {
      assert.equal(spiralMemory(1024), 31);
    });
  });
  describe('Will test square spiral-memory', () => {
    it('Will draw spiral till it equal 23 or more', () => {
      assert.equal(spiralMemory(23, true), 23);
    });
  });
});
