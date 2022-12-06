/*jshint node:true */
'use strict';

function resolve(input) {
    input = input.replaceAll('    ', ' [0] ').split(/\n/);
    const parseCrates = s => [...s.matchAll(/\[([A-Z|0])\]/g)].map(match => (match[1] !== '0') ? match[1] : undefined);
    const parseMoves = s => s.match(/move\s(\d+)\sfrom\s(\d+)\sto\s(\d+)/);
    const moves = input.map(parseMoves).filter(e => e);
    const transpose = m => m[0].map((x, i) => m.map(x => x[i]).reverse());

    let crates = transpose(input.map(parseCrates).filter(e => e.length)).map(e => e.filter(i => i));

    for (const [_, many, from, to] of moves) {

        const cratesToMove = crates[from - 1].splice(-many).reverse();
        crates[to - 1].push(...cratesToMove);
    }

    return crates.map((e) => e.at(-1)).join("");
}

export {resolve};
