/*jshint node:true */
'use strict';

function resolve(input) {
    input = input.split('\n').map(Number);

    let calories = [];
    let max = 0;
    let current = 0;
    for (const number of input) {
        if (number === 0) {
            calories.push(current);
            current = 0;
            continue;
        }
        current += number;
    }

    max += calories.sort(function (a, b) {
        return a - b;
    }).pop();
    max += calories.pop();
    max += calories.pop();

    return max;
}

export {resolve};
