var loops = 0;
var currentLoop = 0;
var pi = 1;
var fract = 0;
var negative = 1;
const text = document.querySelector(".title");
const buttonThing = document.querySelector(".thing");
const piText = document.querySelector(".pi");
const inputArea = document.querySelector(".inniputte");
const image = document.querySelector(".peakimage");
const title2 = document.querySelector(".title2");
const list = document.querySelector(".outputs");

text.classList.add('change');
text.classList.add('centerAlt');
text.textContent = "pi web site";
piText.textContent = "no pi yet ):";
piText.classList.add('center');
inputArea.classList.add('center');
buttonThing.classList.add('center');
image.classList.add("image");
title2.classList.add("centerAlt");
list.classList.add("centerAltAlt");
list.style.left = (document.documentElement.clientWidth / 2) - 55 + "px";

function isNumeric(String) {

    var parsedInt = parseInt(String);
    if(isNaN(parsedInt)){
        return false;
    } else {
        return true;
    }
}

buttonThing.addEventListener("click", function(){

piText.classList.add('piFont');


if (isNumeric(inputArea.value))
{
    loops = inputArea.value;
    var currentLoop = 0;
    var pi = 1;
    var fract = 0;
    var negative = 1;

    while (currentLoop < loops)
    {
        currentLoop += 1;
        fract += ((4 / (currentLoop * 2 - 1)) * negative)
        negative *= -1;
        loops -= 1;
    }
    pi = fract;
    piText.textContent = pi.toString();

    //the part where i breed more lis
    const newLI = document.createElement("li");
    const LIcontent = document.createTextNode(pi.toString());

    newLI.appendChild(LIcontent);
    /* newLI.style.margin = "10px";
    newLI.style.display = "block";
    newLI.style.padding = "10px"
    */


    list.appendChild(newLI);




} else 
{
    piText.textContent = "not a number ):"
}
    



});



