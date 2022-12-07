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

    let directoriesSize = {};
    let root = new Node();
    input.reduce((node, l) => _treeBuilder(node, l), root);
    treeSizeTraversal(root, directoriesSize);
    return Object.values(directoriesSize).filter(i => i < 100000).reduce((sum, i) => sum+i);
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
        leaf.name = `${node.name}${commandArgs}/`;
        leaf.parentNode = node;
        node.childs.push(leaf);
        return leaf;
    }

    if (fileSize && file) {
        leaf.type = 'f';
        leaf.name = `${node.name}${file}`;
        leaf.size = +fileSize;
        leaf.parentNode = node;
        node.childs.push(leaf);
    }

    return node;
}

function treeSizeTraversal(node, directoriesSize) {
    if (node.type === 'f') {
        node.parentNode.size += node.size;
        return node.size;
    }
    let sumOfChild = 0;
    for (const childNode of node.childs) {
        let result = treeSizeTraversal(childNode, directoriesSize);
        sumOfChild+= result;
        directoriesSize[node.name] = directoriesSize[node.name] ? directoriesSize[node.name] + result : result;
    }
    return sumOfChild;
}

export {resolve};
