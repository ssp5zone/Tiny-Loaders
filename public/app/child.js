(function(parent) {
    var block = new Block("Child");
    parent.children.push(block);
    block.render(parent);
})(grandParent.children[0]);