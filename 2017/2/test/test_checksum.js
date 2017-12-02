/*jshint node:true */
'use strict';

const assert = require('assert');
const checksum = require('../checksum');

describe('Will test checksum', () => {
  describe('Test min max checksum', () => {
    it('Test this checksum\n5 1 9 5\n7 5 3\n2 4 6 8', () => {
      assert.equal(checksum('5 1 9 5\n7 5 3\n2 4 6 8'), '18');
    });
  });
  describe('Test divide checksum', () => {
    it('Test this checksum\n5 9 2 8\n9 4 7 3\n3 8 6 5', () => {
      assert.equal(checksum('5 9 2 8\n9 4 7 3\n3 8 6 5', true), '9');
    });
  });
});
