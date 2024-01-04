

/*
let age;
document.getElementById("btn").onclick = function(){
    user = document.getElementById("userText").value;
    age = document.getElementById("userAge").value;
    age = Number(age)+1;
    document.getElementById("head").textContent=`Hello you are ${user}`;
    
    document.getElementById("myage").textContent= `You are age of ${age}`;
}
*/
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

