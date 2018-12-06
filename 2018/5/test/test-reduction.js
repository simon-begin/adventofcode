/*jshint node:true */
'use strict';

const assert = require('assert');
const reduction = require('../reduction');

describe('test alchemical reduction', () => {
  it('reduce dabAcCaCBAcCcaDA', () => {

  	let puzzle = 'dabAaCBAcCcaDA';

    assert.equal(reduction(puzzle), 10);
  });
});