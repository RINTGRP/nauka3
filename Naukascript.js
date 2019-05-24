document.querySelector(".circlea").onclick=function(){
    document.querySelector(".visible").classList.remove("visible");
    document.querySelector(".tomato").classList.add("visible");
}
document.querySelector(".circleb").onclick=function(){
    document.querySelector(".visible").classList.remove("visible");
    document.querySelector(".cucumber").classList.add("visible");
}
document.querySelector(".circlec").onclick=function(){
    document.querySelector(".visible").classList.remove("visible");
    document.querySelector(".carrot").classList.add("visible");
}
document.querySelector(".size-changer").onclick=function(){
    let mTextSel=document.querySelector(".magic-text");
    mTextSel.classList.toggle("small");
    mTextSel.classList.toggle("big");
}