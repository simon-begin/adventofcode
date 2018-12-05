/*jshint node:true */
'use strict';

module.exports = function repose(input, alt=false) {
  input = input.split('\n');

  let orderedRecords = input.sort(_sortRecordsByDate);
  let currentGuard = 0;
  let result = {};
  let startSleeping = '';

  orderedRecords.forEach((record) => {
    let date = (new Date(_getTimeStamp(record))).getTime();

    if (_getGuard(record) !== null) {
      currentGuard = _getGuard(record);
      if (result[`${currentGuard}`] === undefined) result[`${currentGuard}`] = {max: 0, sleeping: []};

    } else if (record.match(/sleep/)) {
      startSleeping = date;
    } else {
      result[`${currentGuard}`].max+= _getMinutesOfSleeping(startSleeping, date);
      result[`${currentGuard}`].sleeping.push([startSleeping, date, _getAllMinutes(startSleeping, date)]);
    }
  });


  if (!alt) {
    let mostSleepingGuard = _getMaxSleepingGuard(result);
    return mostSleepingGuard * _mostFrequentValue(result[mostSleepingGuard].sleeping.map(e => e[2]));
  }

}

function _sortRecordsByDate(a, b) {
  a = _getTimeStamp(a);
  b = _getTimeStamp(b);
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function _getTimeStamp(str) {
  return str.match(/(?<=\[).*?(?=\])/)[0] || '';
}

function _getGuard(str) {
  return str.match(/(?<=#)\d+/);
}

function _getMinutesOfSleeping(start, end) {
  return new Date(Math.abs(end - start)).getUTCMinutes();
}

function _getMaxSleepingGuard(schedule) {
  return Object.keys(schedule).reduce((a, b) => schedule[a].max > schedule[b].max ? a : b);
}

// Stupid fucking shit
function _getAllMinutes(start, end) {
  let arr = []
  for (let m = new Date(start).getUTCMinutes(); m < new Date(end).getUTCMinutes(); m++) {
    arr.push(m);
  }
  return arr;
}

//https://codereview.stackexchange.com/a/177989 have fun like i will do this myself its just dump
function _mostFrequentValue(arr) {

  arr = [].concat.apply([], arr)// flat array

  let max = 0;
  let mode = null;
  let counted = arr.reduce((acc, curr) => { 
      if (curr in acc) {
          acc[curr]++;
      } else {
          acc[curr] = 1;
      }

      if (max < acc[curr]) {
          max = acc[curr];
          mode = curr;
      }

      return acc;
  }, {});

  return mode;
}