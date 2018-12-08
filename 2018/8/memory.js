/*jshint node:true */
'use strict';

// class Header() {
//   childNodes: [],
//   value: [],

//   sumvalue() {
//     return this.value.reduce((sum, meta) => sum+= meta, 0);
//   }
// }

module.exports = function memory(input, alt=false) {
  input = input.split(/\s/).map(Number);

  if (!alt) return _calc(_treeBuilder(input));
}


class Node {
  constructor() {
    this.childs = [];
    this.metadata = [];
  }
}

function _treeBuilder (data) {
  let numberOfChilds = data.shift();
  let numbersOfMetadata = data.shift();

  let leaf = new Node();

  for (let i = 0; i < numberOfChilds; i++) {
    leaf.childs.push(_treeBuilder(data));
  }

  for (let i = 0; i < numbersOfMetadata; i++) {
    leaf.metadata.push(data.shift());
  }

  return leaf;
}

function _calc(tree) {
  return _sum(tree.metadata) + _sum(tree.childs.map(_calc));
}

function  _sum(node) {
    return node.reduce((sum, v) => sum + v, 0);
  }