// Add toggle functionality
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

(function(path) {
    // NOTICE: This might be called while sidebar is still loading. NOT GOOD.
    $("a[href='" + path + "']").addClass("active");
})(currentPath);