/*jshint node:true */
'use strict';

const assert = require('assert');
const inverseCaptcha = require('../inverse-captcha');

describe('Will test halway around reverse captcha', () => {
  it('Test this sequence 1212', () => {
    assert.equal(inverseCaptcha('1212', true), '6');
  });
  it('Test this sequence 1221', () => {
    assert.equal(inverseCaptcha('1221', true), '0');
  });
  it('Test this sequence 123425', () => {
    assert.equal(inverseCaptcha('123425', true), '4');
  });
  it('Test this sequence 123123', () => {
    assert.equal(inverseCaptcha('123123', true), '12');
  });
  it('Test this sequence 12131415', () => {
    assert.equal(inverseCaptcha('12131415', true), '4');
  });
});
