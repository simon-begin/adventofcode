/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`;

describe('test puzzle 1', () => {
   it('puzzle1', () => {
       assert.equal(puzzle1(example), 24000);
   });
    it('puzzle2', () => {
        assert.equal(puzzle2(example), 45000);
    });
});
