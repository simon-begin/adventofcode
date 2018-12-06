/*jshint node:true */
'use strict';

module.exports = function reduction(input, alt=false) {
  let reduction = input.split('');

  if (!alt) return _classicReduction(reduction);

  const alphabeth = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return Math.min(...alphabeth.map((letter) => {
    let temp = reduction.filter(c => c.toLowerCase() !== letter);
    return _classicReduction(temp);
    })
  );
}

function _classicReduction(reduction) {
  let theEnd = true;
  while(true) {
    theEnd = true;
    for (let i = 0; i < reduction.length - 1; i++) {
      if (reduction[i].toLowerCase() === reduction[i + 1].toLowerCase()) {
        if (reduction[i] !== reduction[i + 1]) {
          reduction.splice(i, 2);
          theEnd = false;
          break;
        }
      }
    }
    if (theEnd) break;
  }

  return reduction.length;
}


// 9386