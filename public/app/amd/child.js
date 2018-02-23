define([
    "Block",
    "./parent",
], function(Block, parent) {
    'use strict';
    var block = new Block("Child");
    parent.children.push(block);
    block.render(parent);
});