/*jshint node:true */
'use strict';

let firewall = [];

module.exports = function scanner(data, alt) {
  firewall = data.split('\n').map(line => line.split(':').map(Number));
  let delay = 0;

  while (firewall.some(([depth, range]) => _delay(depth, range, delay))) {
    delay++;
  }

  return alt ? delay : _severity();
};

function _severity() {
  return firewall.filter(([depth, range]) => _delay(depth, range))
  .reduce((sum, [depth, range]) => sum + depth * range, 0);
}

function _delay(depth, range, delay = 0) {
  return (delay + depth) % (2 * (range - 1)) === 0;
}
