/*jshint node:true */
'use strict';

const assert = require('assert');
const maze = require('../maze');

describe('Will test maze', () => {
    it('Will test the maze 0 3  0  1  -3', () => {
      assert.equal(maze('0\n3\n0\n1\n-3'), 5);
    });
    it('Will test the maze 0 3  0  1  -3 in alt mode', () => {
      assert.equal(maze('0\n3\n0\n1\n-3', true), 10);
    });
});
