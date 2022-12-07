/*jshint node:true */
'use strict';

class Node  {
    constructor() {
        this.childs = [];
        this.size = 0;
        this.type = 'd';
        this.name = '/';
        this.parentNode = null;
    }
}

function resolve(input) {
    input = input.trim().split('\n');

    let root = new Node();
    input.reduce((node, l) => _treeBuilder(node, l), root);
    return 'lol';
}

function _treeBuilder(node, data) {
    const [_, command, commandArgs] = data.match(/^\$\s([a-z]+)\s(.*)/) || [undefined, undefined, undefined];
    const [__, fileSize, file] = data.match(/(\d+)\s([a-z.]+)/) || [undefined, undefined];

    let leaf = new Node();

    if (command && command === 'cd') {
        if (commandArgs === '/') {
            return node;
        }
        if (commandArgs === '..') {
            return node.parentNode;
        }
        const haveChild = node.childs.findIndex(l => l && l.name === commandArgs);
        if (haveChild > 0) {
            return node.childs[haveChild];
        }

        leaf.type = 'd';
        leaf.name = commandArgs;
        leaf.parentNode = node;
        leaf.size = node.childs.reduce((sum, l) => sum + (typeof l.size === 'function' ? l.size() : l.size), 0);
        node.childs.push(leaf);
        return leaf;
    }

    if (fileSize && file) {
        leaf.type = 'f';
        leaf.name = file;
        leaf.size = +fileSize;
        leaf.parentNode = node;
        node.childs.push(leaf);
    }

    return node;
}

export {resolve};
