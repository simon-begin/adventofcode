/*jshint node:true */
'use strict';

import {describe, it} from 'mocha';
import {resolve as puzzle1} from '../modules/puzzle1.js';
import {resolve as puzzle2} from '../modules/puzzle2.js';
import * as assert from 'assert';

const example = `
$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k
`;

describe('test puzzle', () => {
    it('puzzle1', () => {
        assert.equal(puzzle1(example), 95437);
    });
    it('puzzle2', () => {
        assert.equal(puzzle2(example), 24933642);
    });
});
