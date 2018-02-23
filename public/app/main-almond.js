// almond is vendor file. It is advised to bundle it seperatly
require("almond");
require("./amd/child.js");
require("./amd/sidebar/initSidebar");
// need to fix absolute path
require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../stylesheets/simple-sidebar.css");