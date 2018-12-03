/*jshint node:true */
'use strict';

module.exports = function checksum(input, alt=false) {
	input = input.split('\n');
	if (!alt) return _numberOfRepeatedLetters(input);

	let pattern = [];
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			let charsI = [...input[i]];
			let charsJ = [...input[j]];

			let sameLetters = charsI.filter(char => charsJ.includes(char));
			if (sameLetters.length > pattern.length) pattern = sameLetters;
		}
	}
	return pattern.join('');
};

function _numberOfRepeatedLetters(input) {
	let result = [];
	result = input.reduce((sum, line) => {
		let chars = [...line];

		let repeatedLetters = {};
		chars.forEach((char) => {
			repeatedLetters[char] ? repeatedLetters[char]++ : repeatedLetters[char] = 1;
		});

		if (Object.values(repeatedLetters).includes(2)) sum[0]++;
		if (Object.values(repeatedLetters).includes(3)) sum[1]++;

		return sum;
	}, [0, 0]);

	return result[0] * result[1];
}