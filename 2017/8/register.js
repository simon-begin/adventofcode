/*jshint node:true */
'use strict';

module.exports = function register(data, alt) {
  const parse = s => s.match(/^([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) (.{1,2}) (-?\d+)/);
  const operations = {
    'inc': '+',
    'dec': '-'
  };
  let parsedData = data.split('\n').map(parse);
  let result = Object.assign(...parsedData.map(d => ({[d[1]]: 0})));
  let max = 0
  for (let i = 0; i < parsedData.length; i++) {
    let eq = eval(`${result[parsedData[i][4]]} ${parsedData[i][5]} ${parsedData[i][6]}`);
    if (eq) {
      let res = eval(`${result[parsedData[i][1]]} ${operations[parsedData[i][2]]} ${parsedData[i][3]}`)
      max = max < res ? res : max;
      result[parsedData[i][1]] = res;
    }
  }
  if (alt) {
    return max;
  }
  return Math.max(...Object.values(result));
};
