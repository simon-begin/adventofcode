/*jshint node:true */
'use strict';

const assert = require('assert');
const garbage = require('../garbage');

describe('Will test stream processing', () => {
    it(`Will test with group {}`, () => {
      assert.equal(garbage('{}'), 1);
    });
    it(`Will test with group {{{}}}`, () => {
      assert.equal(garbage('{{{}}}'), 6);
    });
    it(`Will test with group {{},{}}`, () => {
      assert.equal(garbage('{{},{}}'), 5);
    });
    it(`Will test with group {{{},{},{{}}}}`, () => {
      assert.equal(garbage('{{{},{},{{}}}}'), 16);
    });
    it(`Will test with group {<a>,<a>,<a>,<a>}`, () => {
      assert.equal(garbage('{<a>,<a>,<a>,<a>}'), 1);
    });
    it(`Will test with group {{<ab>},{<ab>},{<ab>},{<ab>}}`, () => {
      assert.equal(garbage('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 9);
    });
    it(`Will test with group {{<!!>},{<!!>},{<!!>},{<!!>}}`, () => {
      assert.equal(garbage('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 9);
    });
    it(`Will test with group {{<a!>},{<a!>},{<a!>},{<ab>}}`, () => {
      assert.equal(garbage('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 3);
    });
    it(`Will test count of garbage for <{o"i!a,<{i<a>`, () => {
      assert.equal(garbage('<{o"i!a,<{i<a>', true), 10);
    });
});
