define([
    './loadSidebar',
    'jquery',
], function(sidebar, $) {
    'use strict';
    
    // GOOD: the template is now avaiable for manipulation
    // as it has been garunteed by the completion of loadSidebar
    var path = sidebar.path;    // NOTICE: how path is referenced here because of "exports" instead of module.exports
    $("a[href='" + path + "']").addClass("active");

    // Add toggle functionality
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});