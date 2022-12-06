/*jshint node:true */
'use strict';

function resolve(input) {
    input = input.trim().split('');

    let packet = [];
    let result;
    for (const [i, letter] of input.entries()) {
        if (!packet.includes(letter)) {
            if (packet.length === 4) {
                result = i;
                break;
            }
            packet.push(letter);
            continue;
        }
        packet = packet.slice(packet.indexOf(letter) + 1);
        packet.push(letter);
    }
    return result;
}

export {resolve};
