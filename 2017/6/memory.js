/*jshint node:true */
'use strict';

module.exports = function maze(seq, alt) {
  seq = seq.split(/\s+/).map(Number);
  let states = {};
  let cycles = 0;
  states[seq.join('')] = true;
  while(true) {
      _redistribute(seq);
      cycles++;
      let hash = seq.join('');
      if(states[hash]) {
          if (!alt) {
            break;
          }
          alt = false;
          cycles = 0;
          states = {};
      }
      states[hash] = true;
  }
  return cycles;
};

function _redistribute(seq) {
  let max = seq.indexOf(Math.max(...seq));
  let value = seq[max];
  seq[max] = 0;
  while(value) {
      max = (max + 1) % seq.length;
      seq[max]++;
      value--;
  }
}
