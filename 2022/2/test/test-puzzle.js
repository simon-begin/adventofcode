/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example = `
A Y
B X
C Z
`;

describe('test puzzle', () => {
   it('puzzle1', () => {
       assert.equal(puzzle1(example), 15);
   });
    it('puzzle2', () => {
        assert.equal(puzzle2(example), 12);
    });
});
