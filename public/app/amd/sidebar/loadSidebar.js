define([
    'jquery',
    'text!./sidebar.html',
    'exports',
], function($, template, exports) {
    'use strict';
    // loading and injecting as a template ensures that the content is DOM ready
    // for its own use and other callers.
    // COOL: This solves the problem of Async HTML load
    $("#sidebar-wrapper").html(template);
    
    // See: You are now exporting as one of the members. 
    exports.path = location.pathname.split("/").pop();
});