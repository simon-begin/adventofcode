/*jshint node:true */
'use strict';

const assert = require('assert');
const slice = require('../slice');

describe('test the slicing square', () => {
  it('test overlaping of 2 claim', () => {
  	let puzzle = '#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2';

  	assert.equal(slice(puzzle), 4);
  });

    it('test claim not overlapped', () => {
  	let puzzle = '#1 @ 1,3: 4x4\n#2 @ 3,1: 4x4\n#3 @ 5,5: 2x2';

  	assert.equal(slice(puzzle, true), 3);
  });
});