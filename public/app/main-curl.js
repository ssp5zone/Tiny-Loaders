// The following will one by one load everything needed
// whenever needed
curl([
    "css!bootstrap",
    "css!app",
    "amd/child",
]);

// load sidebar in parallel
curl(["amd/sidebar/initSidebar"]);
