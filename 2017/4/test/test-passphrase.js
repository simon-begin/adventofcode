/*jshint node:true */
'use strict';

const assert = require('assert');
const spiralMemory = require('../passphrase');

describe('Will test passphrase', () => {
    it('Will test the sequence aa bb cc dd ee', () => {
      assert.equal(spiralMemory('aa bb cc dd ee'), 1);
    });
    it('Will test the sequence aa bb cc dd aa', () => {
      assert.equal(spiralMemory('aa bb cc dd aa'), 0);
    });
    it('Will test the sequence aa bb cc dd aaa', () => {
      assert.equal(spiralMemory('aa bb cc dd aaa'), 1);
    });
});
