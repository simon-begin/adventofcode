/*jshint node:true */
'use strict';

function puzzle1(input) {
    const parse = s => s.match(/^(\d+)-(\d+)\s([A-z]):\s([A-z]+)/);
    const parsedData = input.split('\n').map(parse);
    const result = parsedData.map(d => ({[d[4]]: [d[3], d[1], d[2]]}));

    let validPasswords = [];
    result.forEach(line => {
        let times = Object.keys(line)[0].split(Object.values(line)[0][0]).length - 1;

        if (times >= Object.values(line)[0][1] && times <= Object.values(line)[0][2]) {
            validPasswords.push(Object.keys(line)[0]);
        }
    });

    return validPasswords.length;
};

function puzzle2(input) {
    const parse = s => s.match(/^(\d+)-(\d+)\s([A-z]):\s([A-z]+)/);
    const parsedData = input.split('\n').map(parse);
    const result = parsedData.map(d => ({[d[4]]: [d[3], d[1], d[2]]}));

    let validPasswords = [];
    result.forEach(line => {
        if ((Object.keys(line)[0][Object.values(line)[0][1] - 1] == Object.values(line)[0][0] && Object.keys(line)[0][Object.values(line)[0][2] - 1] !== Object.values(line)[0][0])
        || (Object.keys(line)[0][Object.values(line)[0][1] - 1] !== Object.values(line)[0][0] && Object.keys(line)[0][Object.values(line)[0][2] - 1] == Object.values(line)[0][0])) {
            validPasswords.push(Object.keys(line)[0]);
        }
    });

    return validPasswords.length;
};

module.exports = { puzzle1, puzzle2 };

