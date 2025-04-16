var inps = document.querySelector("#search");
var btn = document.querySelector("button")
var ul = document.querySelector("#uli")
var li;

btn.addEventListener("click", function(){
    if(inps.value.trim() === ''){
        alert("add your task please");
    }
    else{
        li = document.createElement("li");
        li.textContent = inps.value;
        ul.appendChild(li);
        inps.value = '';
    }
})