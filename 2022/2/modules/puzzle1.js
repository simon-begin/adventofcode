/*jshint node:true */
'use strict';

function resolve(input) {

    let play = {
        A: 'Y',
        B: 'Z',
        C: 'X'
    };

    const samePlay = {
        A: 'X',
        B: 'Y',
        C: 'Z'
    };

    const points = {
        'X': 1,
        'Y': 2,
        'Z': 3
    };

    input = input.replace(/\\\s/g, '%20').trim().split(/\s/);
    let result = 0;
    for (let i = 0; i < input.length; i+= 2) {
        let opn = input[i];
        let player = input[i+1];

        if (play[opn] === player) {
            result+= 6;
        }

        if (samePlay[opn] === player) {
            result += 3;
        }
        result+= points[player];
    }
    return result;
}

export { resolve };
