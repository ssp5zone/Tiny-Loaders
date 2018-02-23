define([
    'Block',
    "module"
], function(Block, module) {
    'use strict';
    var block = new Block("Grand Parent");
    block.render(".module-container");
    module.exports = block;
});