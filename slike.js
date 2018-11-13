var sl1=document.getElementsByClassName("uvecaj")[0];
var sl2=document.getElementsByClassName("uvecaj")[1];

var sl3=document.getElementsByClassName("uvecaj")[2];
var sl4=document.getElementsByClassName("uvecaj")[3];

var img =document.getElementsByClassName("slikatrenutna")[0];
var screen=document.getElementsByClassName("fullscreen")[0];
var opis =document.getElementsByClassName("opis")[0];
var close=document.getElementsByClassName("close")[0];
sl1.addEventListener("click",test);
sl2.addEventListener("click",test);
sl3.addEventListener("click",test);
sl4.addEventListener("click",test);
close.addEventListener("click",zatvori);
function test () {

    screen.style.display="flex";
    opis.innerHTML=this.alt;
    img.src=this.src;


}
function zatvori () {
    screen.style.display="none";

    
}


