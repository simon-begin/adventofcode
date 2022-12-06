/*jshint node:true */
'use strict';

import stdio from 'stdio';
import {resolve as puzzle1} from './modules/puzzle1.js';
import {resolve as puzzle2} from './modules/puzzle2.js';

const opts = stdio.getopt({
    'input': {key: 'i', args: 1, mandatory: true, 'description': 'Puzzle input'}
});

if (opts.input) {
    console.log(puzzle1(opts.input));
    console.log('----------------------');
    console.log(puzzle2(opts.input));
}
