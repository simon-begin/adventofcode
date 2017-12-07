/*jshint node:true */
'use strict';

module.exports = function circus(data, alt) {
  data = data.split('\n');
  const parse = s => s.match(/(\w+) \((\d+)\)(?: -> (.+))?/);
  let tree = data.map(parse).reduce((o, [sum, key, value, nodes]) =>
  ({ ...o, [key]: {
      value: +value,
      nodes: nodes ? nodes.split(', ') : [],
      nodesValues: function(tree) {
        return this.nodes.reduce((sum, key) => sum += tree[key].value, 0);
      }
    }}), {});

  let nodes = [].concat(...Object.keys(tree).map(k => tree[k].nodes));
  const root = Object.keys(tree).filter(k => !nodes.includes(k))[0];
  console.log(root);
  if (alt) {
    let sumBranches = tree[root].nodes.map(n => _sumChild(tree, n, tree[n].value));
    console.log("sum", sumBranches);
    let diff = Math.max(...sumBranches) - Math.min(...sumBranches);
    console.log("dif", diff);
    console.log(tree[tree[root].nodes[sumBranches.indexOf(Math.max(...sumBranches))]]);

    return tree[tree[root].nodes[sumBranches.indexOf(Math.max(...sumBranches))]].value - diff;
  }
  return root;
};

function _sumChild(tree, node, sum = 0) {
    let i = 0;
    let childs =  tree[node].nodes;
    while(i < childs.length) {
      sum += tree[childs[i]].nodes ? _sumChild(tree, childs[i]) : tree[childs[i]].value;
      i++;
    }
    return sum + tree[node].nodesValues(tree);
}
