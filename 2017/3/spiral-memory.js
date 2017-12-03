/*jshint node:true */
'use strict';

const _coords = {
  'right':  {x:  1, y:  0, next: 'up'},
  'up':    {x:  0, y:  1, next: 'left'},
  'left':   {x: -1, y:  0, next: 'down'},
  'down': {x:  0, y: -1, next: 'right'},
};

module.exports = function spiralMemory(length, square = false) {
  if (square) {
    return _spiral(length, square).pop().value;
  } else {
    const spiral = _spiral(length);
    return Math.abs(spiral[length-1].x - 0) + Math.abs(spiral[length-1].y - 0);
  }
};

function _spiral(length, square = false, position = 1, step = 1, x = 0, y = 0,
  spiral = [{x,y,value:1}], direction = 'right') {
    createSpiral: while(true) {
        for (let i = 1; i <= step; i++) {
            if (position < length) {
              x += _coords[direction].x;
              y += _coords[direction].y;
              if (square) {
                position = _sumSquare(spiral, x, y);
                spiral.push({x, y, value: position});
              } else {
                spiral.push({x, y, value: position + i});
              }
            } else {
              break createSpiral;
            }
        }
        position += step;
        step += direction === 'down' || direction === 'up' ? 1 : 0;
        direction = _coords[direction].next;
      }
    return spiral;
}

function _sumSquare(spiral, x, y) {
  return [
    _findCoord(spiral, _coords.right.x + x, _coords.right.y + y),
    _findCoord(spiral, _coords.right.x + x,_coords.up.y + y),
    _findCoord(spiral, _coords.up.x + x,_coords.up.y + y),
    _findCoord(spiral, _coords.left.x + x,_coords.up.y + y),
    _findCoord(spiral, _coords.left.x + x,_coords.left.y + y),
    _findCoord(spiral, _coords.left.x + x,_coords.down.y + y),
    _findCoord(spiral, _coords.down.x + x,_coords.down.y + y),
    _findCoord(spiral, _coords.right.x + x,_coords.down.y + y)
  ].reduce((sum, pv) => pv ? sum+pv.value : sum, 0);
}

function _findCoord(coordinates, ...args) {
  return coordinates.find((c) => c.x === args[0] && c.y === args[1]);
}
