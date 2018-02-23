// NOTICE: The sidebar is still loaded asyn

$("#sidebar-wrapper").load("/public/app/amd/sidebar/sidebar.html");
var currentPath = location.pathname.split("/").pop();
