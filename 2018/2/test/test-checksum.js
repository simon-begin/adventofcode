/*jshint node:true */
'use strict';

const assert = require('assert');
const checksum = require('../checksum');

describe('test the checksum', () => {
  it('test with 4 twos and 3 threes', () => {
    let puzzle = 'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab';

    assert.equal(checksum(puzzle), 12);
  });

  it('find the pattern', () => {
    let puzzle = 'abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz';

    assert.equal(checksum(puzzle, true), 'fgij');
  });
});