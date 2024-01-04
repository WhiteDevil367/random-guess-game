
let counter = document.getElementById("counter");
let decrease =  document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");

let count =0;

reset.onclick= function(){
    count = 0
    counter.textContent= count;
}
decrease.onclick= function(){
    count = count-1
    
    counter.textContent = count;
}

increase.onclick = function(){
    count = count+1
    counter.textContent = count;
}

