// For testing Almond.js

(function() {
    define("my-mod-2", ["my-mod-1"]);
})();

(function() {
    define("my-mod-1", [
        'require',
    ], function(mod1, require) {
        'use strict';
        console.log("Hello");
    });
})();

require("my-mod-2");