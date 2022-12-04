/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;

describe('test puzzle', () => {
   it('puzzle1', () => {
       assert.equal(puzzle1(example), 2);
   });
    it('puzzle2', () => {
        assert.equal(puzzle2(example), 4);
    });
});
