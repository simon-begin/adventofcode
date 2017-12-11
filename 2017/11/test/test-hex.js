/*jshint node:true */
'use strict';

const assert = require('assert');
const hex = require('../hex');

describe('Will test he', () => {
    it(`Will test with this seq ne,ne,ne`, () => {
      assert.equal(hex('ne,ne,ne'), 3);
    });
    it(`Will test with seq ne,ne,sw,sw`, () => {
      assert.equal(hex('ne,ne,sw,sw'), 0);
    });
    it(`Will test with seq ne,ne,s,s`, () => {
      assert.equal(hex('ne,ne,s,s'), 2);
    });
    it(`Will test with se,sw,se,sw,sw`, () => {
      assert.equal(hex('se,sw,se,sw,sw'), 3);
    });
});
