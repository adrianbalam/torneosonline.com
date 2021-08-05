window.addEventListener("scroll",function(){
    if(window.scrollY>=449){
        document.getElementById("header-index").style.backgroundColor="black";
    }else{
        document.getElementById("header-index").style.backgroundColor="rgba(0, 0, 0, 0.75)";
    }
});