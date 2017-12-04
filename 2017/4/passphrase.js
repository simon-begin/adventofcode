/*jshint node:true */
'use strict';

module.exports = function passphrase(data) {
    return data.split('\n').map((line) => {
      line = line.split(/\s+/).map(i => i.split('').sort().join(''));
      return (new Set(line).size === line.length);
  }).reduce((sum, pv) => pv ? sum+= 1 : sum, 0);
};
