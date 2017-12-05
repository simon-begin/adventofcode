/*jshint node:true */
'use strict';

module.exports = function maze(data, alt) {
  data = data.split('\n').map(Number);
  return _move(data, alt);
};

function _move(maze, alt) {
  let position = 0;
  let result = 0;
  while (position < maze.length) {
    let oldPos = position;
    position += maze[position];
    maze[oldPos] += maze[oldPos] >= 3 && alt ? -1 : 1;
    result++;
  }
  return result;
}
