function gotocontact(shouldIcloseMenu){

    if(shouldIcloseMenu==1){
        $(".icon").toggleClass("close");
        $.fn.myFunction();
    }

    $(".home-container").addClass("slide-left-lscr")
    document.getElementById("home-container").classList.replace("slide-to-center","slide-left-lscr")
    setTimeout(() => {
        $("#contactUs").removeClass("d-none");
        $("#contactUs").addClass("d-flex");
        $(".home-container").removeClass("d-block");
        $(".home-container").addClass("d-none");
    }, 1000);
}
$("#contactUsBtn").click(function(){
    gotocontact(0);
});

$("#backToHome").click(function(){
    $("#contactUs").addClass("slide-to-right");
    $(".home-container").removeClass("d-none");
    $(".home-container").addClass("d-block");
    setTimeout(() => {
        document.getElementById("home-container").classList.replace("slide-left-lscr","slide-to-center")
        $("#contactUs").removeClass("d-flex");
        $("#contactUs").removeClass("d-block");
        $("#contactUs").addClass("d-none");
        $("#contactUs").removeClass("slide-to-right");
    }, 800);
})