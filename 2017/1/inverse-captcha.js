/*jshint node:true */
'use strict';

module.exports = function inverseCaptcha(code = '') {
  let sum = 0;
  code = code + code[0];
  for (let i = -1; i <= code.length; i++) {
    sum += parseInt(code[i]) === parseInt(code[i + 1]) ? parseInt(code[i]) : 0;
  }
  return sum;
};
