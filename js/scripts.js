
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

// Function Apply filters

function applyfilters() {
    var filter = document.getElementById("filter").value;   // select value
    var inputRange = document.getElementById("btn-range").value;  // input range value
    var viewFilter; 

    if(filter==1) {  // Hue
        viewFilter = '<img style = "-webkit-filter: hue-rotate(' + inputRange +'deg);" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 2) {  // Gray scale
        viewFilter = '<img style = "-webkit-filter: grayscale(' + inputRange +'%)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 0 ) { // origin
        viewFilter = '<img class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 3) {  // bright
        viewFilter = '<img style = "-webkit-filter: brightness('+ inputRange + '%)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 4) {  // contrast
        viewFilter = '<img style = "-webkit-filter: contrast('+ inputRange + '%)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 5) {  // Invert
        viewFilter = '<img style = "-webkit-filter: invert('+ inputRange + '%)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 6) {  // blur
        viewFilter = '<img style = "-webkit-filter: blur('+ inputRange/20 + 'px)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } else if(filter == 7) {  // sepia
        viewFilter = '<img style = "-webkit-filter: sepia('+ inputRange + '%)" class="img-filter" src="./img/escena-negocios-futurista-ambiente-ultra-moderno.jpg" />';
    } 

    document.getElementById("img-f").innerHTML = viewFilter;
}