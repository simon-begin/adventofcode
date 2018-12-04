/*jshint node:true */
'use strict';

module.exports = function slice(input, alt=false) {
	input = input.split('\n');

  let rect = [];
  let notOverlap = []

  _getClaims(input).forEach((claim) => {
    let [id, x, y, w, h] = claim.map(Number);
    notOverlap.push(id);

    for (let rectY = y; rectY < y + h; rectY++) {
      for (let rectX = x; rectX < x + w; rectX++) {
        if (rect[`${rectX},${rectY}`] === undefined) {
          rect[`${rectX},${rectY}`] = id;
        } else {
          notOverlap = notOverlap.filter(item => ![rect[`${rectX},${rectY}`], id].includes(item));
          rect[`${rectX},${rectY}`] = 'X';
        }
      }
    }
  });

  if (alt) {
    return notOverlap.join('');
  } else {
    return Object.values(rect).filter(e => e === 'X').length;
  }
}

function _getClaims(data) {
  return data.map(line => line.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/).slice(1,6));
}
