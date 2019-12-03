/*jshint node:true */
'use strict';

module.exports = function fuel(input, alt=false) {
    input = input.split('\n');
    if (alt) {
        return input.map(getFuel2).reduce((a, b) => a + b, 0);
    }
    return input.map(getFuel1).reduce((a, b) => a + b, 0);
};

function getFuel1(mass) {
    return Math.floor(mass / 3) - 2;
}

function getFuel2(mass) {
    return mass && getFuel2(Math.max(Math.floor(mass / 3) - 2, 0)) + Math.max(Math.floor(mass / 3) - 2, 0);
}
