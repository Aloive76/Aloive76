/*
* File: app.js
* Author: Kocsis Viola
* Copyright: 2023, Kocsis Viola
* Group: Szoft I-2 E
* Date: 2023-02-06
* Github: https://github.com/Aloive76
* Licenc: GNU GPL
*/

const r_1 = document.querySelector("#r_1");
const r_2 = document.querySelector("#r_2");
const kupmagassag = document.querySelector("#kupmagassag");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    
   let r_1 = Number(r_1Elem.value);
   let r_2 = Number(r_2Elem.value);
   let kupmagassag = Number(kupmagassag.value);
  
   let area = calcArea(r_1side, r_2side, kupmagassagside, );
   areaElem.value = area;
});

function calcArea(a, b, c, d) {
    let terulet = ( (a + c)/(4*(a-c)) ) 
    * Math.sqrt(
        (a+b-c+d)*
        (a-b-c+d)*
        (a+b-c-d)*
        (-a+b+c+d)
    )
    return terulet;
}