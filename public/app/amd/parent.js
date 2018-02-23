define([
    "Block",
    "./grandParent",
], function(Block, parent) {
    'use strict';
    var block = new Block("Parent");
    parent.children.push(block);
    block.render(parent);
    return block;
});