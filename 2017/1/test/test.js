/*jshint node:true */
'use strict';

const assert = require('assert');
const inverseCaptcha = require('../inverse-captcha');

describe('Will test reverse captcha', () => {
  it('Test this sequence 1122', () => {
    assert.equal(inverseCaptcha('1122'), '3');
  });
  it('Test this sequence 1111', () => {
    assert.equal(inverseCaptcha('1111'), '4');
  });
  it('Test this sequence 1234', () => {
    assert.equal(inverseCaptcha('1234'), '0');
  });
  it('Test this sequence 91212129', () => {
    assert.equal(inverseCaptcha('91212129'), '9');
  });
});
