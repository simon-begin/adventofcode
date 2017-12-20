/*jshint node:true */
'use strict';

const assert = require('assert');
const duet = require('../duet');

const input = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;

describe('Will test the duet', () => {
    it(`Will execute this input \n${input}`, () => {
      assert.equal(duet(input), 4);
    });
});
