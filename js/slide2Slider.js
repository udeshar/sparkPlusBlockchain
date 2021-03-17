function changeTS(){
    console.log("hghdgdhdcdcdcdc");
    if(slideNum==1){
        document.getElementById("ts1").classList.add("fade_in");
        document.getElementById("ts1").classList.replace("fade_in","fade_out");
        document.getElementById("ts2").classList.add("fade_in");
        document.getElementById("prev-btn-txt").innerText="prev";
        slideNum=2;
        return;
    }
    if(slideNum==2){
        document.getElementById("ts2").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts3").classList.add("fade_in");
        slideNum=3;
        return;
    }
    if(slideNum==3){
        document.getElementById("ts3").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts4").classList.add("fade_in");
        slideNum=4;
        return;
    }
    if(slideNum==4){
        document.getElementById("ts4").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts5").classList.add("fade_in");
        slideNum=5;
        return;
    }
    if(slideNum==5){
        document.getElementById("ts5").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts6").classList.add("fade_in");
        slideNum=6;
        return;
    }
    if(slideNum==6){
        document.getElementById("ts6").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts7").classList.add("fade_in");
        slideNum=7;
        return;
    }
    if(slideNum==7){
        document.getElementById("ts7").classList.replace("fade_in","fade_out");
        // document.getElementById("ts2").classList.add("fade_out");
        document.getElementById("ts8").classList.add("fade_in");
        document.getElementById("nxt-btn-txt").innerText="next page";
        slideNum=8;
        return;
    }
    if(slideNum==8){
        showOcean();
    }
}

function changeTSback(){
    if(slideNum==1){
        showIntro();
    }
    if(slideNum==2){
        document.getElementById("ts2").classList.replace("fade_in","fade_out")
        document.getElementById("ts1").classList.replace("fade_out","fade_in");
        document.getElementById("prev-btn-txt").innerText="prev page";
        slideNum=1;
        return;
    }
    if(slideNum==8){
        document.getElementById("ts8").classList.replace("fade_in","fade_out")
        document.getElementById("ts7").classList.replace("fade_out","fade_in");
        document.getElementById("nxt-btn-txt").innerText="next";
        slideNum=7;
        return;
    }
    if(slideNum==3){
        document.getElementById("ts3").classList.replace("fade_in","fade_out")
        document.getElementById("ts2").classList.replace("fade_out","fade_in");
        slideNum=2;
        return;
    }
    if(slideNum==4){
        document.getElementById("ts4").classList.replace("fade_in","fade_out")
        document.getElementById("ts3").classList.replace("fade_out","fade_in");
        slideNum=3;
        return;
    }
    if(slideNum==5){
        document.getElementById("ts5").classList.replace("fade_in","fade_out")
        document.getElementById("ts4").classList.replace("fade_out","fade_in");
        slideNum=4;
        return;
    }
    if(slideNum==6){
        document.getElementById("ts6").classList.replace("fade_in","fade_out")
        document.getElementById("ts5").classList.replace("fade_out","fade_in");
        slideNum=5;
        return;
    }
    if(slideNum==7){
        document.getElementById("ts7").classList.replace("fade_in","fade_out")
        document.getElementById("ts6").classList.replace("fade_out","fade_in");
        slideNum=6;
        return;
    }
    
    
}