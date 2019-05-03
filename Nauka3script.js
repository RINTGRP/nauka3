document.querySelector(".circlea").onclick=function(){
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".tomato").classList.add("hidden");

    console.log('clicked: ' + document.querySelector(".tomato").classList);
}
document.querySelector(".circleb").onclick=function(){
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".cucumber").classList.add("hidden");
}
document.querySelector(".circlec").onclick=function(){
    document.querySelector(".hidden").classList.remove("hidden");
    document.querySelector(".carrot").classList.add("hidden");
}