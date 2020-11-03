$(document).ready(function(){
    $(".side-nav-link").click(function(){
        $(this).parent().siblings().removeClass("side-nav-active");
        $(this).parent().addClass("side-nav-active");
    });

});

function executeSideNav(sn){
    var c= document.getElementById("side-navbar").children;
    let i;
    sn;
    for(i=0;i<c.length;i++){
        if(sn-1 != i){
            c[i].classList.remove("side-nav-active")
        }
        else{
            c[i].classList.add("side-nav-active")
        }          
    }
}
// if(slideNumber==2){
//         $("nav2").siblings().removeClass("side-nav-active");
//         $("nav2").addClass("side-nav-active");
//     }
//     if(slideNumber==3){
//         $("nav3").siblings().removeClass("side-nav-active");
//         $("nav3").addClass("side-nav-active");
//     }
//     if(slideNumber==4){
//         $("nav4").siblings().removeClass("side-nav-active");
//         $("nav4").addClass("side-nav-active");
//     }