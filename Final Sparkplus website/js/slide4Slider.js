function nextProduct(){
    console.log("slide4 pressed");
    

    if(slide4counter==1){
        document.getElementById("productBox").classList.add("customProductBox");

        setTimeout(()=>{
            document.getElementById("productBox2").classList.remove("customProductBox");
            document.getElementById("productBox").classList.remove("activeOwn");
            document.getElementById("productBox2").classList.add("activeOwn");
        },2000)
        slide4counter=2;
        document.getElementById("prev-btn-txt3").innerText="prev";
        return;
    }
    if(slide4counter==2){
        document.getElementById("productBox2").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox3").classList.remove("customProductBox");
            document.getElementById("productBox2").classList.remove("activeOwn");
            document.getElementById("productBox3").classList.add("activeOwn");
        },2000)
        slide4counter=3;
        return;
    }
    if(slide4counter==3){
        document.getElementById("productBox3").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox4").classList.remove("customProductBox");
            document.getElementById("productBox3").classList.remove("activeOwn");
            document.getElementById("productBox4").classList.add("activeOwn");
        },2000)
        slide4counter=4;
        return;
    }
    if(slide4counter==4){
        document.getElementById("productBox4").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox5").classList.remove("customProductBox");
            document.getElementById("productBox4").classList.remove("activeOwn");
            document.getElementById("productBox5").classList.add("activeOwn");
        },2000)
        slide4counter=5;
        document.getElementById("next-product").style.display="none";
        return;
    }
    
}

function prevProduct(){
    if(slide4counter==1){
        showOcean();
    }
    if(slide4counter==2){
        document.getElementById("productBox2").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox").classList.remove("customProductBox");
            document.getElementById("productBox2").classList.remove("activeOwn");
            document.getElementById("productBox").classList.add("activeOwn");
        },2000)
        slide4counter=1;
        document.getElementById("prev-btn-txt3").innerText="prev page";
        return;
    }
    if(slide4counter==3){
        document.getElementById("productBox3").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox2").classList.remove("customProductBox");
            document.getElementById("productBox3").classList.remove("activeOwn");
            document.getElementById("productBox2").classList.add("activeOwn");
        },2000)
        slide4counter=2;
        return;
    }
    if(slide4counter==4){
        document.getElementById("productBox4").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox3").classList.remove("customProductBox");
            document.getElementById("productBox4").classList.remove("activeOwn");
            document.getElementById("productBox3").classList.add("activeOwn");
        },2000)
        slide4counter=3;
        return;
    }
    if(slide4counter==5){
        document.getElementById("productBox5").classList.add("customProductBox");
        setTimeout(()=>{
            document.getElementById("productBox4").classList.remove("customProductBox");
            document.getElementById("productBox5").classList.remove("activeOwn");
            document.getElementById("productBox4").classList.add("activeOwn");
        },2000)
        slide4counter=4;
        document.getElementById("next-product").style.display="block";
        return;
    }
}