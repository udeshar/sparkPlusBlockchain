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
            $(".intro").addClass("slide-left-lscr")
            $(".dessert").css("display","block")
            setTimeout(() => {
                $(".intro").css("zIndex","10");
                $(".dessert").css("zIndex","11")
                $(".intro").removeClass("slide-left-lscr");
                $(".intro").css("display","none")
            }, 1000);
            slideNumber=4;
            changeSlideNumber()
            executeSideNav(slideNumber)
            return
        }
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
            return
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
            return
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
            return
        }
    }
    else{
        //go down
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
            return
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
            return
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
            slideNumber++;
            changeSlideNumber()
            executeSideNav(slideNumber)
            return
        }
        if(slideNumber==4){
            $(".dessert").addClass("slide-left-lscr");
            $(".intro").css("display","block")
            setTimeout(() => {
                $(".dessert").css("zIndex","10")
                $(".dessert").removeClass("slide-left-lscr");
                $(".dessert").css("display","none")
                $(".intro").css("zIndex","11")
            }, 1000);
            slideNumber=1;
            changeSlideNumber()
            executeSideNav(slideNumber)
            return
        }
    }   
          
}



function showForest(){
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
}

function showIntro(){
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
}

function showDessert(){
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
        return
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
        return
    }
}

function showOcean(){
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
}