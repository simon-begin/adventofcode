/*jshint node:true */
'use strict';

module.exports = function checksum(data, divide = false) {
  return divide ? _divide(data) : _minMax(data);
};

function _minMax(data) {
  return data.split('\n').map((line) => {
    line = line.split(/\s+/);
    return Math.max(...line) - Math.min(...line);
  }).reduce((sum, x) => sum + x);
}

function _divide(data) {
  return data.split('\n').map((line) => {
    return line.split(/\s+/).reduce((sum, x, i, a) => {
      for (let j = 0; j < a.length; j++) {
        if (j !== i && a[j] % x === 0) {
            return sum += a[j] / x;
        }
      }
      return sum;
    }, 0);
  }).reduce((sum, x) => sum + x);
}
