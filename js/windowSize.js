// window.addEventListener('resize', reportWindowSize);

var windowWidth;
var windowHeight;
function reportWindowSize(){
    windowWidth=window.innerWidth;
    windowHeight=window.innerHeight;
    if(windowWidth<1000 || windowHeight<630){
        showErrMsg()
    }
    else{
        removeErrMsg()
    }
}
function showErrMsg(){
    document.getElementById("sizeErr").classList.replace("d-none","d-block");
}
function removeErrMsg(){
    document.getElementById("sizeErr").classList.replace("d-block","d-none");
}