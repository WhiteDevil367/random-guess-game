let button = document.getElementById("buttonEl");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

let ranNum1;
let ranNum2;
let ranNum3;


button.onclick = function(){
    ranNum1 = Math.floor(Math.random()*5)+1;
    ranNum2 = Math.floor(Math.random()*5)+1;
    ranNum3 = Math.floor(Math.random()*5)+1;

    num1.textContent = ranNum1;
    num2.textContent = ranNum2;
    num3.textContent = ranNum3;
}