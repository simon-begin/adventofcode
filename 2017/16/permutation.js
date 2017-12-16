/*jshint node:true */
'use strict';

const _letters = 'abcdefghijklmnopqrstuvwxyz';
let _programs = [];

module.exports = function permutation(data, alt = false, nbr = 16) {
  data = data.split(',');
  _programs = _letters.substring(0, nbr).split('');
  let iterations = [];
  for (let i = 0; i < (alt ? 1E9 : 1); i++) {
    _dance(data);
    if (iterations.includes(_programs.join(''))) {
      return iterations[(1E9 % i) - 1];
    }
    iterations.push(_programs.join(''));
  }
  return _programs.join('');
};

function _dance(data) {
  for (let i = 0; i < data.length; i++) {
    let dancers = data[i].slice(1).split('/');
    switch(data[i][0]) {
      case 's':
        _spin(dancers[0]);
        break;
      case 'x':
        _swappingPosition(dancers[0], dancers[1]);
        break;
      case 'p':
        _swappingPosition(
          _programs.indexOf(dancers[0]),
          _programs.indexOf(dancers[1])
      );
      break;
    }
  }
}

function _spin(x) {
  _programs = [..._programs.slice(-x), ..._programs.slice(0, -x)];
}

function _swappingPosition(a, b) {
  [_programs[a], _programs[b]] = [_programs[b], _programs[a]];
}
