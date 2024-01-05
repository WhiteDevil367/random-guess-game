
<<<<<<< HEAD


=======
>>>>>>> 5a1d81a93cc183b03dc60b7c04107fc8350d468f
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

