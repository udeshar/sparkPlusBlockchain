function changeSlideNumber(){
        menuActiveNav()
        if(slideNumber==1){
            setTimeout(() => {
                slide2AnimationSetting()
               document.getElementById("valueToChange").innerText="1"; 
            }, 1000);
            
        }
        if(slideNumber==2){
            setTimeout(() => {
               document.getElementById("valueToChange").innerText="2";
               $(".crypto-big-logos").removeClass('d-none');
                $(".crypto-big-logos").addClass('d-block');
                $(".crypto-logos").removeClass('d-none');
                $(".crypto-logos").addClass('d-block');
            }, 1200);
            
        }
        if(slideNumber==3){
            setTimeout(() => {
                slide2AnimationSetting()
               document.getElementById("valueToChange").innerText="3"; 
            }, 1000);
            
        }
        if(slideNumber==4){
            setTimeout(() => {
                slide2AnimationSetting()
               document.getElementById("valueToChange").innerText="4"; 
            }, 1000);
            
        }
    
}
function slide2AnimationSetting(){
    document.querySelector('.crypto-logos').classList.remove("slideIcons");
    $(".crypto-logos").removeClass('d-block');
    $(".crypto-logos").addClass('d-none');
    $(".crypto-big-logos").removeClass('d-block');
    $(".crypto-big-logos").addClass('d-none');
}
function menuActiveNav(){
     // $(".secondUl").children().removeClass("active-menu-screen");
     $(`.menu-it`).removeClass("active-menu-screen");
     $(`.menu-it`).eq(slideNumber-1).addClass("active-menu-screen");
}