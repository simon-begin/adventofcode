/*jshint node:true */
'use strict';

// NW|N |
// --+--+--
// SW|  |NE
// --+--+--
//   |S |SE
const _coords = {
  'n':  {x:   0, y:   1},
  'nw': {x:  -1, y:   1},
  'sw': {x:  -1, y:   0},
  's':  {x:   0, y:  -1},
  'se': {x:   1, y:  -1},
  'ne': {x:   1, y:   0},
};

module.exports = function register(data, alt) {
  let x = 0;
  let y = 0;
  let distance = 0;
  let max = 0;
  data.split(',').forEach(k => {
    x += _coords[k].x;
    y += _coords[k].y;
    distance = Math.max(Math.abs(x), Math.abs(y), Math.abs(x + y));
    max = Math.max(max, distance);
  });
  return alt ? max : distance;
};
