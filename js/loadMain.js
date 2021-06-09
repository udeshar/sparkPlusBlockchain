var slideNumber = 1;
var slideNum=1;
var slide3Num=1;
var slide4counter=1;
var progressWidth=12.5;
var menuOpen = false;
var tempp = false;
var wind_width=window.innerWidth;
if(wind_width<824){
    changingSlideTime=1000;
}
else{
    changingSlideTime=3000;
}
function loadBody(){
    setTimeout(() => {
        document.getElementById("logo-div").classList.add("logoUp");
        document.querySelector(".paraNbutton").classList.add("paraup");
        document.querySelector("#main-button").classList.add("buttonup");
    }, 6000);
}

const openHomePage = () => {
    document.querySelector(".loading-content").classList.add("disapear");
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("slide-left-lscr");
        document.getElementById("intro").style.display="block"
        document.querySelector(".loading-content").classList.add("d-none");
    }, changingSlideTime);
    document.getElementById("home-container").style.display="block";
}