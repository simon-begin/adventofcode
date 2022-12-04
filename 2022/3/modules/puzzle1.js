/*jshint node:true */
'use strict';

const _letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function resolve(input) {
    input = input.replace(/\\\s/g, '%20').trim().split(/\s/);
    input = input.map(rucksack => {
       const middle = Math.ceil(rucksack.length / 2);
       return [rucksack.split('').splice(0, middle), rucksack.split('').splice(-middle)];
    });

    input = input.map(rucksack => rucksack[0].filter(element => rucksack[1].includes(element)));
    input = input.map(rucksack => [...new Set(rucksack)]);
    return input.reduce((sum, e) => sum+= _letters.indexOf(e)+1, 0);
}

export { resolve };
