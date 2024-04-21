
//  Open main menu responsive
function openMenu() {
   document.getElementById("menu-click").classList.toggle("menu-show");   
};

// open window (div)
function openWindow() {
    document.getElementById("openWin").classList.add("view");
};

// close window (div)
function closeWindow() {
    document.getElementById("openWin").classList.remove("view");
};