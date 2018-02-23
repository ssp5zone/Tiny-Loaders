(function(parent) {
    var block = new Block("Parent");
    parent.children.push(block);
    block.render(parent);
})(grandParent);