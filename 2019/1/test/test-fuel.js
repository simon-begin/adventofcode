/*jshint node:true */
'use strict';

const assert = require('assert');
const fuel = require('../fuel');

describe('test fuel', () => {
    it('get fuel for mass 100756', () => {
        assert.equal(fuel('100756'), '33583');
    });
    it('get fuel for mass 100756 alt', () => {
        assert.equal(fuel('100756', true), '50346');
    });
});
