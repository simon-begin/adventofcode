/*jshint node:true */
'use strict';

let _pipes = [];

module.exports = function plumber(data, alt) {
  _pipes = data.split('\n')
  .map(line => line.split(' <-> ')[1]
  .split(', ').map(Number));

  let result = _pipes.map((_, k) => _route(k).sort().join(''));
  return alt ? new Set(result).size : result[0].length;
};

function _route(id, pipes = []) {
  for (let i = 0; i < _pipes[id].length; i++) {
    if (!pipes.includes(_pipes[id][i])) {
      pipes.push(_pipes[id][i]);
      _route(_pipes[id][i], pipes);
    }
  }
  return pipes;
}
