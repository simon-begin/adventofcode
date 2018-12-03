/*jshint node:true */
'use strict';

const assert = require('assert');
const chronal = require('../chronal');

describe('test the calculus', () => {
    it('3 additions', () => {
        const puzzle = "+1\n+1\n+1";

        assert.equal(chronal(puzzle), 3)
    });

    it('addition and subtract', () => {
    const puzzle = "+1\n+1\n-2";

    assert.equal(chronal(puzzle), 0)
    });

    it('3 subtracts', () => {
    const puzzle = "-1\n-2\n-3";

    assert.equal(chronal(puzzle), -6)
    });

    it('reache 14 twices', () => {
    const puzzle = "+7\n+7\n-2\n-7\n-4";

    assert.equal(chronal(puzzle, true), 14)
    });
});