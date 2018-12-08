/*jshint node:true */
'use strict';

const assert = require('assert');
const memory = require('../memory');

describe('test memory maneuver', () => {
  it('part1', () => {
    const puzzle = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';

    assert.equal(memory(puzzle), 138);
  });

    it('part2', () => {
    const puzzle = '2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2';

    assert.equal(memory(puzzle), 66);
  });
});