$(document).ready(function(){
    $(".nav-item").click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active")
    });
  });

var menuStatus="closed";

function loadingFunc(){
    var sparkAnm = document.getElementById("spark_name")
    sparkAnm.addEventListener("animationend",myEndFunction) 
}
function myEndFunction(){
    console.log("animation ended");
    document.getElementById("msg-box").classList.add("msg-animate");
}
const mainButtonClick = () =>{
    console.log("button clicked")
    var mainContainner = document.getElementById("main-container");
    mainContainner.classList.add("slideUp");

    mainContainner.addEventListener("animationend",()=>{
        mainContainner.style.display="none";
    })

    var homeContainer = document.getElementById("home-container");
    homeContainer.style.display="block";
}
const showMenu = () =>{
    
    if(menuStatus=="closed"){
        document.getElementById("navbar-brand").classList.remove("accent")
        document.getElementById("home-container").classList.add("show-menu");
        setTimeout(() => {
            document.getElementById("list1").classList.toggle("nav-list-up")
        }, 100);
        setTimeout(() => {
            document.getElementById("list2").classList.toggle("nav-list-up")
        }, 200);
        setTimeout(() => {
            document.getElementById("list3").classList.toggle("nav-list-up")
        }, 300);
        setTimeout(() => {
            // document.getElementById("menu-icon").classList.remove("fa-bars");
            // document.getElementById("menu-icon").classList.add("fa-times");

            document.getElementById("list4").classList.toggle("nav-list-up")

            // document.getElementById("menu-container").classList.remove("d-none")
            document.getElementById("menu-container").classList.toggle("dflex")
            setTimeout(() => {
                document.getElementById("menu-list-1").classList.toggle("animate__zoomIn")
            }, 100);
            setTimeout(() => {
                document.getElementById("menu-list-2").classList.toggle("animate__zoomIn")
            }, 200);
            setTimeout(() => {
                document.getElementById("menu-list-3").classList.toggle("animate__zoomIn")
            }, 300);
            setTimeout(() => {
                document.getElementById("menu-list-4").classList.toggle("animate__zoomIn")
            }, 400);
        }, 400);
        menuStatus="opened"
    }
    else{
        setTimeout(() => {
            document.getElementById("menu-list-4").classList.toggle("animate__zoomOut")
        }, 100);
        setTimeout(() => {
            document.getElementById("menu-list-3").classList.toggle("animate__zoomOut")
        }, 200);
        setTimeout(() => {
            document.getElementById("menu-list-2").classList.toggle("animate__zoomOut")
        }, 300);
        setTimeout(() => {
            document.getElementById("menu-list-1").classList.toggle("animate__zoomOut")            

            // document.getElementById("menu-icon").classList.toggle("fa-bars");

            document.getElementById("home-container").classList.toggle("show-menu2");

            document.getElementById("navbar-brand").classList.toggle("accent")
            setTimeout(() => {
                document.getElementById("menu-container").classList.toggle("dnone")
                document.getElementById("list4").classList.toggle("nav-list-down")
            }, 100);
            setTimeout(() => {
                document.getElementById("list3").classList.toggle("nav-list-down")
            }, 200);
            setTimeout(() => {
                document.getElementById("list2").classList.toggle("nav-list-down")
            }, 300);
            setTimeout(() => {
                document.getElementById("list1").classList.toggle("nav-list-down")
            }, 400);            
        }, 400);        
        menuStatus="opened"
    }

}

