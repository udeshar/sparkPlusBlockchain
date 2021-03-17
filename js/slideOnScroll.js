$(".home-container").bind('mousewheel',slideOnScroll);

function slideOnScroll(evt) {
    $(".home-container").unbind("mousewheel", slideOnScroll);
    setTimeout(() => {
        $(".home-container").bind("mousewheel", slideOnScroll);
    }, 1500);
    
    var delta = evt.originalEvent.wheelDelta;
    evt.preventDefault();

    if(delta > 0){
        //go up
        if(slideNumber==1){
            // $(".intro").addClass("slide-left-lscr")
            // $(".dessert").css("display","block")
            // setTimeout(() => {
            //     $(".intro").css("zIndex","10");
            //     $(".dessert").css("zIndex","11")
            //     $(".intro").removeClass("slide-left-lscr");
            //     $(".intro").css("display","none")
            // }, 1000);
            // slideNumber=4;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showDessert();
            return;
        }
        if(slideNumber==2){
            // $(".forest").addClass("slide-left-lscr")
            // $(".intro").css("display","block")
            // setTimeout(() => {
            //     $(".forest").css("zIndex","10");
            //     $(".intro").css("zIndex","11")
            //     $(".forest").removeClass("slide-left-lscr");
            //     $(".forest").css("display","none")
            // }, 1000);
            // slideNumber--;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showIntro();
            return;
        }
        if(slideNumber==3){
            // $(".ocean").addClass("slide-left-lscr")
            // $(".forest").css("display","block")
            // setTimeout(() => {
            //     $(".ocean").css("zIndex","10");
            //     $(".forest").css("zIndex","11")
            //     $(".ocean").removeClass("slide-left-lscr");
            //     $(".ocean").css("display","none")
            // }, 1000);
            // slideNumber--;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showForest();
            return;
        }
        if(slideNumber==4){
            // $(".dessert").addClass("slide-left-lscr")
            // $(".ocean").css("display","block")
            // setTimeout(() => {
            //     $(".dessert").css("zIndex","10");
            //     $(".ocean").css("zIndex","11")
            //     $(".dessert").removeClass("slide-left-lscr");
            //     $(".dessert").css("display","none")
            // }, 1000);
            // slideNumber--;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showOcean();
            return;
        }
    }
    else{
        //go down
        if(slideNumber==1){
            // $(".intro").addClass("slide-left-lscr");
            // $(".forest").css("display","block")
            // setTimeout(() => {
            //     $(".intro").css("zIndex","10")
            //     $(".intro").removeClass("slide-left-lscr");
            //     $(".intro").css("display","none")
            //     $(".forest").css("zIndex","11")
            // }, 1000);
            // slideNumber++;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showForest();
            return;
        }
        if(slideNumber==2){
            // $(".forest").addClass("slide-left-lscr");
            // $(".ocean").css("display","block")
            // setTimeout(() => {
            //     $(".forest").css("zIndex","10")
            //     $(".forest").removeClass("slide-left-lscr");
            //     $(".forest").css("display","none")
            //     $(".ocean").css("zIndex","11")
            // }, 1000);
            // slideNumber++;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showOcean();
            return;
        }
        if(slideNumber==3){
            // $(".ocean").addClass("slide-left-lscr");
            // $(".dessert").css("display","block")
            // setTimeout(() => {
            //     $(".ocean").css("zIndex","10")
            //     $(".ocean").removeClass("slide-left-lscr");
            //     $(".ocean").css("display","none")
            //     $(".dessert").css("zIndex","11")
            // }, 1000);
            // slideNumber++;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showDessert();
            return;
        }
        if(slideNumber==4){
            // $(".dessert").addClass("slide-left-lscr");
            // $(".intro").css("display","block")
            // setTimeout(() => {
            //     $(".dessert").css("zIndex","10")
            //     $(".dessert").removeClass("slide-left-lscr");
            //     $(".dessert").css("display","none")
            //     $(".intro").css("zIndex","11")
            // }, 1000);
            // slideNumber=1;
            // changeSlideNumber()
            // executeSideNav(slideNumber)
            // return
            showIntro();
            return;
        }
    }   
          
}

var timeCount=0;
var mouseUp=undefined;

function jumpToAPage(temp){
    timeCount=0;
    mouseUp=setInterval(() => {
        timeCount++;
        if(timeCount>=1){
            jumpToAPage2(temp);
        }
        console.log(timeCount);           
    }, 1000);     
}
function jumpToAPage2(temp){
    clearInterval(mouseUp);
    if(timeCount>=1){
        if(temp=="prev"){
            slideToPrevPage();
        }
        else{
            slideToNextPage();
        }
        
    }
}
function slideToNextPage(){
    // clearInterval(mouseUp);
    if(slideNumber==1){
        showForest();
        return;
    }
    if(slideNumber==2){
        showOcean();
        return;
    }
    if(slideNumber==3){
        showDessert();
        return;
    }
    if(slideNumber==4){
        showIntro();
        return;
    }
}
function slideToPrevPage(){
    if(slideNumber==1){
        showDessert();
        return;
    }
    if(slideNumber==2){
        showIntro();
        return;
    }
    if(slideNumber==3){
        showForest();
        return;
    }
    if(slideNumber==4){
        showOcean();
        return;
    }
}

function showForest(){
    activeNav()
    if(slideNumber==1){
        $(".intro").addClass("slide-left-lscr");
        $(".forest").css("display","block")
        setTimeout(() => {
            $(".intro").css("zIndex","10")
            $(".intro").removeClass("slide-left-lscr");
            $(".intro").css("display","none")
            $(".forest").css("zIndex","11")
        }, 1000);
        slideNumber++;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==3){
        $(".ocean").addClass("slide-left-lscr")
        $(".forest").css("display","block")
        setTimeout(() => {
            $(".ocean").css("zIndex","10");
            $(".forest").css("zIndex","11")
            $(".ocean").removeClass("slide-left-lscr");
            $(".ocean").css("display","none")
        }, 1000);
        slideNumber--;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==4){
        $(".dessert").addClass("slide-left-lscr")
        $(".forest").css("display","block")
        setTimeout(() => {
            $(".dessert").css("zIndex","10");
            $(".forest").css("zIndex","11")
            $(".dessert").removeClass("slide-left-lscr");
            $(".dessert").css("display","none")
        }, 1000);
        slideNumber=2;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    document.getElementsByClassName("nav__underline")[slideNumber-1].classList.add("activeNav");
}

function showIntro(){
    activeNav()
    if(slideNumber==2){
        $(".forest").addClass("slide-left-lscr")
        $(".intro").css("display","block")
        setTimeout(() => {
            $(".forest").css("zIndex","10");
            $(".intro").css("zIndex","11")
            $(".forest").removeClass("slide-left-lscr");
            $(".forest").css("display","none")
        }, 1000);
        slideNumber--;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==3){
        $(".ocean").addClass("slide-left-lscr")
        $(".intro").css("display","block")
        setTimeout(() => {
            $(".ocean").css("zIndex","10");
            $(".intro").css("zIndex","11")
            $(".ocean").removeClass("slide-left-lscr");
            $(".ocean").css("display","none")
        }, 1000);
        slideNumber=1;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==4){
        $(".dessert").addClass("slide-left-lscr")
        $(".intro").css("display","block")
        setTimeout(() => {
            $(".dessert").css("zIndex","10");
            $(".intro").css("zIndex","11")
            $(".dessert").removeClass("slide-left-lscr");
            $(".dessert").css("display","none")
        }, 1000);
        slideNumber=1;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    document.getElementsByClassName("nav__underline")[slideNumber-1].classList.add("activeNav");
}

function showDessert(){
    activeNav()
    if(slideNumber==1){
        $(".intro").addClass("slide-left-lscr");
        $(".dessert").css("display","block")
        setTimeout(() => {
            $(".intro").css("zIndex","10")
            $(".intro").removeClass("slide-left-lscr");
            $(".intro").css("display","none")
            $(".dessert").css("zIndex","11")
        }, 1000);
        slideNumber=4;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==2){
        $(".forest").addClass("slide-left-lscr");
        $(".dessert").css("display","block")
        setTimeout(() => {
            $(".forest").css("zIndex","10")
            $(".forest").removeClass("slide-left-lscr");
            $(".forest").css("display","none")
            $(".dessert").css("zIndex","11")
        }, 1000);
        slideNumber=4;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==3){
        $(".ocean").addClass("slide-left-lscr");
        $(".dessert").css("display","block")
        setTimeout(() => {
            $(".ocean").css("zIndex","10")
            $(".ocean").removeClass("slide-left-lscr");
            $(".ocean").css("display","none")
            $(".dessert").css("zIndex","11")
        }, 1000);
        slideNumber=4;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    document.getElementsByClassName("nav__underline")[slideNumber-1].classList.add("activeNav");
}

function showOcean(){
    activeNav()
    if(slideNumber==1){
        
        $(".intro").addClass("slide-left-lscr");
        $(".ocean").css("display","block")
        setTimeout(() => {
            $(".intro").css("zIndex","10")
            $(".intro").removeClass("slide-left-lscr");
            $(".intro").css("display","none")
            $(".ocean").css("zIndex","11")
        }, 1000);
        slideNumber=3;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==2){
        
        $(".forest").addClass("slide-left-lscr");
        $(".ocean").css("display","block")
        setTimeout(() => {
            $(".forest").css("zIndex","10")
            $(".forest").removeClass("slide-left-lscr");
            $(".forest").css("display","none")
            $(".ocean").css("zIndex","11")
        }, 1000);
        slideNumber++;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    if(slideNumber==4){
        
        $(".dessert").addClass("slide-left-lscr")
        $(".ocean").css("display","block")
        setTimeout(() => {
            $(".dessert").css("zIndex","10");
            $(".ocean").css("zIndex","11")
            $(".dessert").removeClass("slide-left-lscr");
            $(".dessert").css("display","none")
        }, 1000);
        slideNumber--;
        changeSlideNumber()
        executeSideNav(slideNumber)
    }
    document.getElementsByClassName("nav__underline")[slideNumber-1].classList.add("activeNav");
}

function activeNav(){
    var abc=document.getElementsByClassName("nav__underline").length;
    var ab=document.getElementsByClassName("nav__underline");
    for(let i=0;i<abc;i++){
        ab[i].classList.remove("activeNav");
    }
}