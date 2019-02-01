var pl1 = document.getElementById("p1")
var pl2 = document.getElementById("p2")
var su1 = document.getElementById("s1")
var su2 = document.getElementById("s2")
var mu1 = document.getElementById("m1")
var mu2 = document.getElementById("m2")
var bu1 = document.getElementById("b1")
var bu2 = document.getElementById("b2")
var bu3 = document.getElementById("b3")

var res = document.getElementById("result")

function add(e){
    e.preventDefault()
    res.textContent = parseInt(pl1.value) + parseInt(pl2.value)
   
}

bu1.addEventListener("click",add)


function sub(e){
    e.preventDefault()
    res.textContent = parseInt(su1.value) - parseInt(su2.value)
   
}

bu2.addEventListener("click",sub)


function mul(e){
    e.preventDefault()
    res.textContent = parseInt(mu1.value) * parseInt(mu2.value)
   
}

bu3.addEventListener("click",mul)


