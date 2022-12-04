/*jshint node:true */
'use strict';

const _letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function resolve(input) {
    input = input.replace(/\\\s/g, '%20').trim().split(/\s/);
    input = input.reduce((result, arr, i) => {
        if (i % 3 === 0 && i !== 0) result.push([]);
        result[result.length - 1].push(arr);
        return result;
    }, [[]]);



    input = input.map(rucksack => rucksack[0].split('').filter(element => rucksack[1].split('').includes(element)).filter(element => rucksack[2].split('').includes(element)));
    input = input.map(rucksack => [...new Set(rucksack)]);
    return input.reduce((sum, e) => sum+= _letters.indexOf(e)+1, 0);
}

export {resolve};
