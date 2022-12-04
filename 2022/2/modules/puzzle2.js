/*jshint node:true */
'use strict';

function resolve(input) {

    let win = {
        A: 'Y',
        B: 'Z',
        C: 'X'
    };

    let lose = {
        A: 'Z',
        B: 'X',
        C: 'Y'
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

        if (player === 'Z') {
            result+= 6;
            player = win[opn];
        }
        else if (player === 'Y') {
            result += 3;
            player = samePlay[opn];
        }
        else if (player === 'X') {
            player = lose[opn];
        }

        result+= points[player];
    }
    return result;
}

export { resolve };
