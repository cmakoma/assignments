var first = document.getElementById("goo")
var second = document.getElementById("bob")
var third = document.getElementById("cheep")
var ans = document.getElementById("result")




function add(e){
    e.preventDefault()
    ans.textContent = parseInt(first.value)*5 + parseInt(second.value)*7 + parseInt(third.value)*11
    first.value = " "
    second.value= " "
    third.value= " "
}

document.getElementById("button").addEventListener("click",add)