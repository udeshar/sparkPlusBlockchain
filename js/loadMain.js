var slideNumber = 1;
var menuOpen = false;
var tempp = false;
function loadBody(){
    setTimeout(() => {
        document.getElementById("logo-div").classList.add("logoUp");
        document.querySelector(".paraNbutton").classList.add("paraup");
        document.querySelector("#main-button").classList.add("buttonup");
    }, 5000);
}

const openHomePage = () => {
    document.querySelector(".loading-content").classList.add("disapear");
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("slide-left-lscr");
        document.getElementById("intro").style.display="block"
    }, 3000);
    document.getElementById("home-container").style.display="block";
}