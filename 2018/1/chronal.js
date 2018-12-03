/*jshint node:true */
'use strict';

module.exports = function chronal(input, alt=false) {
    input = input.split('\n');

    if (!alt) return input.reduce((total, i) => total + parseInt(i), 0);

    let freq = [0];
    let sum = 0;
    while(true) {
        for (let i = 0; i < input.length; i++) {
            sum += parseInt(input[i]);

            if (freq.includes(sum)) return sum;

            freq.push(sum);
        }
    }
};