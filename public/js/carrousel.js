'use strict'

const grande    = document.querySelector('.grande');
const clickDer  = document.querySelector('.puntoDer').addEventListener("click",sumarUno);
const clickIzq  = document.querySelector('.puntoIzq').addEventListener("click",restarUno);
let posicionClick = 0;

function sumarUno(){
    if (posicionClick<3) posicionClick = posicionClick+1;
    console.log(posicionClick);
    let operacion = posicionClick * -25;
    grande.style.transform = `translateX(${ operacion }%)`
}
function restarUno(){
    if (posicionClick>0) posicionClick =posicionClick-1;
    console.log(posicionClick);
    let operacion = posicionClick * -25;
    grande.style.transform = `translateX(${ operacion }%)`
}
