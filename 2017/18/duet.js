/*jshint node:true */
'use strict';

class Program {
  constructor(id) {
    this.id = id;
    this.values = {
      p: id
    };
    this.pos = 0;
    this.queue = [];
    this.sendedValue = 0;
    this.deadlock = false;
  }

  getNumber(val) {
    return this.values[val] ? this.values[val] : parseInt(val);
  }
}

module.exports = function duet(data) {
  data = data.split('\n').map(line => line.split(' '));
  let progs = [new Program(0), new Program(1)];
  let i = 0;
  while (!(progs[0].deadlock && progs[1].deadlock)) {
    progs.map(prog => {
      let instruction = data[prog.pos];
      switch (instruction[0]) {
        case 'snd':
          progs[1 - prog.id].queue.push(prog.getNumber(instruction[1]));
          progs[1 - prog.id].deadlock = false;
          prog.sendedValue++;
          break;
        case 'set':
          prog.values[instruction[1]] = prog.getNumber(instruction[2]);
          break;
        case 'add':
          prog.values[instruction[1]] += prog.getNumber(instruction[2]);
          break;
        case 'mul':
          prog.values[instruction[1]] *= prog.getNumber(instruction[2]);
          break;
        case 'mod':
          prog.values[instruction[1]] = (
            prog.values[instruction[1]] % prog.getNumber(instruction[2])
          );
          break;
        case 'rcv':
          if (prog.queue.length) {
            prog.values[instruction[1]] = prog.queue.shift();
          } else {
            prog.deadlock = true;
            prog.pos--;
          }
          break;
        case 'jgz':
          if (prog.getNumber(instruction[1]) > 0) {
            prog.pos += prog.getNumber(instruction[2]) - 1;
          }
      }
      prog.pos++;
    });
  }
  return progs[1].sendedValue;
};
