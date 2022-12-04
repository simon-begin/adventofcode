/*jshint node:true */
'use strict';

function resolve(input) {
    input = input.split('\n').map(Number);

    let max = 0;
    let current = 0;
    for (const number of input) {
        if (number === 0) {
            max = current < max ? max : current;
            current = 0;
            continue;
        }
        current += number;
    }
    return max;
}

export { resolve };
