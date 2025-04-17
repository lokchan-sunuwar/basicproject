var inps = document.querySelector("#search");
var searchinp = document.querySelector("#searchInp");
var btn = document.querySelector("button")
var ul = document.querySelector("#uli")
var li;



var task = [];

function adding(){

        li = document.createElement("li");
        li.textContent = inps.value;
        ul.appendChild(li);
        inps.value = '';
   
}


btn.addEventListener("click", function(){
    if(inps.value.trim() === ''){
        alert("add your task please");
    }
    else{
        task.push({ name: inps.value });
        adding()
    }

    inps.value = '';
    searchinp.value = '';
})

searchinp.addEventListener("input", function () {
    var tasks = task.filter(function (e) {
        return e.name.toLowerCase().includes(searchinp.value.toLowerCase());
    });

    ul.innerHTML = ""; // clear the list
    tasks.forEach(function (elem) {
        li = document.createElement("li");
        li.textContent = elem.name;
        ul.appendChild(li);

    })
    });