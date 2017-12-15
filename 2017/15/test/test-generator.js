/*jshint node:true */
'use strict';

const assert = require('assert');
const generator = require('../generator');

describe('Will test the generator', () => {
    it(`Will test with generator A = 65 and generator B = 8921`, () => {
      assert.equal(generator(`a 65\nb 8921`, false, 5), 1);
    });
    it(`Will test with generator A = 65 and generator B = 8921`, () => {
      assert.equal(generator(`a 65\nb 8921`, true, 1056), 1);
    });
});
