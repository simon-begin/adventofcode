/*jshint node:true */
'use strict';

const assert = require('assert');
const puzzle = require('../puzzle');

describe('test puzzle', () => {
    it('test puzzle1', () => {
        assert.equal(puzzle.puzzle1(
            '1-3 a: abcde\n' +
            '1-3 b: cdefg\n' +
            '2-9 c: ccccccccc'), '2');
    });
    it('test puzzle2', () => {
        assert.equal(puzzle.puzzle2(
            '1-3 a: abcde\n' +
            '1-3 b: cdefg\n' +
            '2-9 c: ccccccccc'), '1');
    });
});
