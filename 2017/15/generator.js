/*jshint node:true */
'use strict';

module.exports = function generator(data, alt = false, pair = 5E6) {
  data = data.split('\n').map(line => parseInt(line.match(/(\d+)/)[0]));
  let a = data[0];
  let b = data[1];
  let score = 0;

  for (let i = 0; i < pair; i++) {

    if (alt) {
      do { a = (a * 16807) % 2147483647; } while (a % 4);
      do { b = (b * 48271) % 2147483647; } while (b % 8);
    } else {
      a = (a * 16807) % 2147483647;
      b = (b * 48271) % 2147483647;
    }

    // https://stackoverflow.com/a/37774134
    if ((a & 0xFFFF) === (b & 0xFFFF)) {
      score++;
    }
  }
  return score;
};
