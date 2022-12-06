/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example1 = `
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw
`;
const example2 = `
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
`;

describe('test puzzle', () => {
    it('puzzle1', () => {
        assert.equal(puzzle1(example1), 11);
        assert.equal(puzzle1(example2), 10);
    });
    it('puzzle2', () => {
        assert.equal(puzzle2(example1), 26);
        assert.equal(puzzle2(example2), 29);
    });
});