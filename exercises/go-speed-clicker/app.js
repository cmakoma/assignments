
var button = document.getElementById("button")
var counter = localStorage.counting || 0;
var hOne = document.getElementById("hOne")

hOne.textContent = counter;

button.addEventListener("click", function(){
    counter++
    hOne.textContent = counter;
    localStorage.counting = counter
})
