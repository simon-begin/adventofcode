/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

describe('test puzzle', () => {
   it('puzzle1', () => {
       assert.equal(puzzle1(example), 'CMZ');
   });
    it('puzzle2', () => {
        assert.equal(puzzle2(example), 'MCD');
    });
});
