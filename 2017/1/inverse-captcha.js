/*jshint node:true */
'use strict';

module.exports = function inverseCaptcha(code = '', halfway=false) {
  let sum = 0;
  const step = halfway ? code.length / 2 : 1;
  const numbers = halfway ? code + code : code + code[0];
  for (let i = 0; i < code.length; i++) {
    sum += parseInt(numbers[i]) === parseInt(numbers[i + step]) ?
     parseInt(numbers[i]) : 0;
  }
  return sum;
};
