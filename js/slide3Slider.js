function navProgress2(sN){
    var len = document.getElementsByClassName("services-slide").length;
    var ans=(sN*100)/len;
    document.getElementById("navProgress2").style.width=ans+"%";
    document.getElementById("s-ProgressBar").style.width=ans+"%";
}
navProgress2(slide3Num);

function goToNxt(){
    var tempSlide3Num=slide3Num+1;
    navProgress2(tempSlide3Num);
    if(slide3Num==1){
        document.getElementById("s1-img").classList.add("disappear");
        document.getElementById("s-h3-1").classList.add("disappear");
        document.getElementById("s-p-1").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP1").classList.add("disappear");
        document.getElementById("s1tl").classList.add("box1-reverse");
        document.getElementById("s1br").classList.add("box2-reverse");
        setTimeout(() => {
            document.getElementById("s1").style.display="none";
            document.getElementById("s1tl").classList.remove("box1-reverse");
            document.getElementById("s1br").classList.remove("box2-reverse");
            document.getElementById("s1-img").classList.remove("disappear");
            document.getElementById("s-h3-1").classList.remove("disappear");
            document.getElementById("s-p-1").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP1").classList.remove("disappear");
        }, 1000);
        document.getElementById("s2").style.display="block";
        slide3Num=2;
        progressWidth+=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        document.getElementById("prev-btn-txt2").innerHTML="prev";
        return;
    }
    if(slide3Num==2){
        document.getElementById("s2-img").classList.add("disappear");
        document.getElementById("s2tl").classList.add("box1-reverse");
        document.getElementById("s2br").classList.add("box2-reverse");
        document.getElementById("s-h3-2").classList.add("disappear");
        document.getElementById("s-p-2").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP2").classList.add("disappear");
        
        setTimeout(() => {
            document.getElementById("s2").style.display="none";
            document.getElementById("s2tl").classList.remove("box1-reverse");
            document.getElementById("s2br").classList.remove("box2-reverse");
            document.getElementById("s2-img").classList.remove("disappear");
            document.getElementById("s-h3-2").classList.remove("disappear");
            document.getElementById("s-p-2").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP2").classList.remove("disappear");
        }, 1000);
        document.getElementById("s3").style.display="block";
        slide3Num=3;
        progressWidth+=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        return;
    }
    if(slide3Num==3){
        document.getElementById("s3-img").classList.add("disappear");
        document.getElementById("s3tl").classList.add("box1-reverse");
        document.getElementById("s3br").classList.add("box2-reverse");
        document.getElementById("s-h3-3").classList.add("disappear");
        document.getElementById("s-p-3").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP3").classList.add("disappear");
        setTimeout(() => {
            document.getElementById("s3").style.display="none";
            document.getElementById("s3tl").classList.remove("box1-reverse");
            document.getElementById("s3br").classList.remove("box2-reverse");
            document.getElementById("s3-img").classList.remove("disappear");
            document.getElementById("s-h3-3").classList.remove("disappear");
            document.getElementById("s-p-3").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP3").classList.remove("disappear");
        }, 1000);
        document.getElementById("s4").style.display="block";
        slide3Num=4;
        progressWidth+=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        return;
    }
    if(slide3Num==4){
        document.getElementById("s4-img").classList.add("disappear");
        document.getElementById("s4tl").classList.add("box1-reverse");
        document.getElementById("s4br").classList.add("box2-reverse");
        document.getElementById("s-h3-4").classList.add("disappear");
        document.getElementById("s-p-4").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP4").classList.add("disappear");
        setTimeout(() => {
            document.getElementById("s4").style.display="none";
            document.getElementById("s4tl").classList.remove("box1-reverse");
            document.getElementById("s4br").classList.remove("box2-reverse");
            document.getElementById("s4-img").classList.remove("disappear");
            document.getElementById("s-h3-4").classList.remove("disappear");
            document.getElementById("s-p-4").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP4").classList.remove("disappear");
        }, 1000);
        document.getElementById("s5").style.display="block";
        slide3Num=5;
        progressWidth+=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        document.getElementById("next-btn-txt2").innerHTML="next page";
        return;
    }
    // if(slide3Num==5){
    //     document.getElementById("s5-img").classList.add("disappear");
    //     document.getElementById("s5tl").classList.add("box1-reverse");
    //     document.getElementById("s5br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-5").classList.add("disappear");
    //     document.getElementById("s-p-5").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP5").classList.add("disappear");
    //     setTimeout(() => {
    //         document.getElementById("s5").style.display="none";
    //         document.getElementById("s5tl").classList.remove("box1-reverse");
    //         document.getElementById("s5br").classList.remove("box2-reverse");
    //         document.getElementById("s5-img").classList.remove("disappear");
    //         document.getElementById("s-h3-5").classList.remove("disappear");
    //         document.getElementById("s-p-5").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP5").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s6").style.display="block";
    //     slide3Num=6;
    //     progressWidth+=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("next-btn-txt2").innerHTML="next page";
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }
    // if(slide3Num==6){
    //     document.getElementById("s6-img").classList.add("disappear");
    //     document.getElementById("s6tl").classList.add("box1-reverse");
    //     document.getElementById("s6br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-6").classList.add("disappear");
    //     document.getElementById("s-p-6").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP6").classList.add("disappear");
    //     setTimeout(() => {
    //         document.getElementById("s6").style.display="none";
    //         document.getElementById("s6tl").classList.remove("box1-reverse");
    //         document.getElementById("s6br").classList.remove("box2-reverse");
    //         document.getElementById("s6-img").classList.remove("disappear");
    //         document.getElementById("s-h3-6").classList.remove("disappear");
    //         document.getElementById("s-p-6").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP6").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s7").style.display="block";
    //     slide3Num=7;
    //     progressWidth+=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }
    // if(slide3Num==7){
    //     document.getElementById("s7-img").classList.add("disappear");
    //     document.getElementById("s7tl").classList.add("box1-reverse");
    //     document.getElementById("s7br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-7").classList.add("disappear");
    //     document.getElementById("s-p-7").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP7").classList.add("disappear");
    //     setTimeout(() => {
    //         document.getElementById("s7").style.display="none";
    //         document.getElementById("s7tl").classList.remove("box1-reverse");
    //         document.getElementById("s7br").classList.remove("box2-reverse");
    //         document.getElementById("s7-img").classList.remove("disappear");
    //         document.getElementById("s-h3-7").classList.remove("disappear");
    //         document.getElementById("s-p-7").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP7").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s8").style.display="block";
    //     slide3Num=8;
    //     progressWidth+=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("next-btn-txt2").innerHTML="next page";
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }
    if(slide3Num==5){
        showDessert();
    }
    
}

function goToPrev(){
    var tempSlide3Num=slide3Num-1;
    navProgress2(tempSlide3Num);
    if(slide3Num==1){
        showForest();
    }
    if(slide3Num==2){
        document.getElementById("s2-img").classList.add("disappear");
        document.getElementById("s2tl").classList.add("box1-reverse");
        document.getElementById("s2br").classList.add("box2-reverse");
        document.getElementById("s-h3-2").classList.add("disappear");
        document.getElementById("s-p-2").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP2").classList.add("disappear");
        
        setTimeout(() => {
            document.getElementById("s2").style.display="none";
            document.getElementById("s2-img").classList.remove("disappear");
            document.getElementById("s2tl").classList.remove("box1-reverse");
            document.getElementById("s2br").classList.remove("box2-reverse");
            document.getElementById("s-h3-2").classList.remove("disappear");
            document.getElementById("s-p-2").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP2").classList.remove("disappear");
        }, 1000);
        document.getElementById("s1").style.display="block";
        slide3Num=1;
        progressWidth-=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        document.getElementById("prev-btn-txt2").innerHTML="prev page";
        return;
    }
    if(slide3Num==3){
        document.getElementById("s3-img").classList.add("disappear");
        document.getElementById("s3tl").classList.add("box1-reverse");
        document.getElementById("s3br").classList.add("box2-reverse");
        document.getElementById("s-h3-3").classList.add("disappear");
        document.getElementById("s-p-3").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP3").classList.add("disappear");
        
        setTimeout(() => {
            document.getElementById("s3").style.display="none";
            document.getElementById("s3-img").classList.remove("disappear");
            document.getElementById("s3tl").classList.remove("box1-reverse");
            document.getElementById("s3br").classList.remove("box2-reverse");
            document.getElementById("s-h3-3").classList.remove("disappear");
            document.getElementById("s-p-3").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP3").classList.remove("disappear");
        }, 1000);
        document.getElementById("s2").style.display="block";
        slide3Num=2;
        progressWidth-=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        return;
    }
    if(slide3Num==4){
        document.getElementById("s4-img").classList.add("disappear");
        document.getElementById("s4tl").classList.add("box1-reverse");
        document.getElementById("s4br").classList.add("box2-reverse");
        document.getElementById("s-h3-4").classList.add("disappear");
        document.getElementById("s-p-4").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP4").classList.add("disappear");
        
        setTimeout(() => {
            document.getElementById("s4").style.display="none";
            document.getElementById("s4-img").classList.remove("disappear");
            document.getElementById("s4tl").classList.remove("box1-reverse");
            document.getElementById("s4br").classList.remove("box2-reverse");
            document.getElementById("s-h3-4").classList.remove("disappear");
            document.getElementById("s-p-4").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP4").classList.remove("disappear");
        }, 1000);
        document.getElementById("s3").style.display="block";
        slide3Num=3;
        progressWidth-=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        return;
    }
    if(slide3Num==5){
        document.getElementById("s5-img").classList.add("disappear");
        document.getElementById("s5tl").classList.add("box1-reverse");
        document.getElementById("s5br").classList.add("box2-reverse");
        document.getElementById("s-h3-5").classList.add("disappear");
        document.getElementById("s-p-5").classList.add("disappear");
        document.getElementById("sercices-lineBeforeP5").classList.add("disappear");
        
        setTimeout(() => {
            document.getElementById("s5").style.display="none";
            document.getElementById("s5-img").classList.remove("disappear");
            document.getElementById("s5tl").classList.remove("box1-reverse");
            document.getElementById("s5br").classList.remove("box2-reverse");
            document.getElementById("s-h3-5").classList.remove("disappear");
            document.getElementById("s-p-5").classList.remove("disappear");
            document.getElementById("sercices-lineBeforeP5").classList.remove("disappear");
        }, 1000);
        document.getElementById("s4").style.display="block";
        slide3Num=4;
        progressWidth-=12.5;
        document.getElementById("s-slideNum").innerText=slide3Num;
        document.getElementById("next-btn-txt2").innerHTML="next";
        return;
    }
    // if(slide3Num==6){
    //     document.getElementById("s6-img").classList.add("disappear");
    //     document.getElementById("s6tl").classList.add("box1-reverse");
    //     document.getElementById("s6br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-6").classList.add("disappear");
    //     document.getElementById("s-p-6").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP6").classList.add("disappear");
        
    //     setTimeout(() => {
    //         document.getElementById("s6").style.display="none";
    //         document.getElementById("s6-img").classList.remove("disappear");
    //         document.getElementById("s6tl").classList.remove("box1-reverse");
    //         document.getElementById("s6br").classList.remove("box2-reverse");
    //         document.getElementById("s-h3-6").classList.remove("disappear");
    //         document.getElementById("s-p-6").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP6").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s5").style.display="block";
    //     slide3Num=5;
    //     progressWidth-=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }
    // if(slide3Num==7){
    //     document.getElementById("s7-img").classList.add("disappear");
    //     document.getElementById("s7tl").classList.add("box1-reverse");
    //     document.getElementById("s7br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-7").classList.add("disappear");
    //     document.getElementById("s-p-7").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP7").classList.add("disappear");
        
    //     setTimeout(() => {
    //         document.getElementById("s7").style.display="none";
    //         document.getElementById("s7-img").classList.remove("disappear");
    //         document.getElementById("s7tl").classList.remove("box1-reverse");
    //         document.getElementById("s7br").classList.remove("box2-reverse");
    //         document.getElementById("s-h3-7").classList.remove("disappear");
    //         document.getElementById("s-p-7").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP7").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s6").style.display="block";
    //     slide3Num=6;
    //     progressWidth-=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }
    // if(slide3Num==8){
    //     document.getElementById("s8-img").classList.add("disappear");
    //     document.getElementById("s8tl").classList.add("box1-reverse");
    //     document.getElementById("s8br").classList.add("box2-reverse");
    //     document.getElementById("s-h3-8").classList.add("disappear");
    //     document.getElementById("s-p-8").classList.add("disappear");
    //     document.getElementById("sercices-lineBeforeP8").classList.add("disappear");
        
    //     setTimeout(() => {
    //         document.getElementById("s8").style.display="none";
    //         document.getElementById("s8-img").classList.remove("disappear");
    //         document.getElementById("s8tl").classList.remove("box1-reverse");
    //         document.getElementById("s8br").classList.remove("box2-reverse");
    //         document.getElementById("s-h3-8").classList.remove("disappear");
    //         document.getElementById("s-p-8").classList.remove("disappear");
    //         document.getElementById("sercices-lineBeforeP8").classList.remove("disappear");
    //     }, 1000);
    //     document.getElementById("s7").style.display="block";
    //     slide3Num=7;
    //     progressWidth-=12.5;
    //     document.getElementById("s-slideNum").innerText=slide3Num;
    //     document.getElementById("next-btn-txt2").innerHTML="page";
    //     document.getElementById("s-ProgressBar").style.width=progressWidth+"%";
    //     return;
    // }

}