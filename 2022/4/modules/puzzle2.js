/*jshint node:true */
'use strict';

function resolve(input) {
    input = input.replace(/\\\s/g, '%20').trim().split(/\s/);
    input = input.map(e => e.split(/,|\-/));

    input = input.filter(pair => {
        return !union([+pair[0], +pair[1]], [+pair[2], [+pair[3]]]);
    });
    return input.length;
}

function union(range1, range2) {
    return (range2[1] < range1[0] || range1[1] < range2[0] );
}

export { resolve };
