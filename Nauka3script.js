document.querySelector(".circlea").onclick=function(){
    
    
    document.querySelectorAll(".image img").forEach(function (element) {
        element.classList.remove("visible")
    });

    document.querySelector(".tomato").classList.add("visible");

    
}
document.querySelector(".circleb").onclick=function(){
    let hidden = document.querySelectorAll(".image img.visible")
    for (i=0; i<hidden.length; i++) {
        console.log('i: ' + i);
        hidden[i].classList.remove("visible");
    }
    document.querySelector(".cucumber").classList.add("visible");
}
document.querySelector(".circlec").onclick=function(){
    document.querySelector(".tomato").classList.remove("visible");
    document.querySelector(".cucumber").classList.remove("visible");
    document.querySelector(".carrot").classList.add("visible");
}