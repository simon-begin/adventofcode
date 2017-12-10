/*jshint node:true */
'use strict';

module.exports = function garbage(data, alt) {
  let nGroups = 0;
  let depth = 1;
  let garbage = false;
  let nGarbage = 0;

  let i = 0;
  while (i < data.length) {
    let c = data[i];
    if (c === '!') i++;
    else if (garbage && c != '>') nGarbage++
    else if (c == '<') garbage = true
    else if (c == '>') garbage = false
    else if (c == '{') nGroups += depth++
    else if (c == '}') depth--
    i++;
  }
  return alt ? nGarbage : nGroups;
};
