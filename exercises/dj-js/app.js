
function b(){
    document.getElementById("disk").style.backgroundColor = "blue"
}

document.getElementById("disk").addEventListener("mouseover", b)

function r(){
    document.getElementById("disk").style.backgroundColor = "red"
}

document.getElementById("disk").addEventListener("mouseout", r)


function g(){
    document.getElementById("disk").style.backgroundColor = "green"
}

document.getElementById("disk").addEventListener("dblclick", g)


function or(){
    document.getElementById("disk").style.backgroundColor = "orange"
}

document.getElementById("disk").addEventListener("mouseup", or)

function pu(){
    document.getElementById("disk").style.backgroundColor = "purple"
}

document.getElementById("disk").addEventListener("mousedown", pu)


function bl(e){
    console.log(e.keyCode);
    var keyCode = e.keyCode;
    if(keyCode === 66){
        document.getElementById("disk").style.backgroundColor = "black"
    }
    if(keyCode === 82){
        document.getElementById("disk").style.backgroundColor = "red"
    }
    if(keyCode === 89){
        document.getElementById("disk").style.backgroundColor = "yellow"
    }
    if(keyCode === 79){
        document.getElementById("disk").style.backgroundColor = "orange"
    }
    if(keyCode === 71){
        document.getElementById("disk").style.backgroundColor = "green"
    }
    if(keyCode === 86){
        document.getElementById("disk").style.backgroundColor = "violet"
    }
}

document.addEventListener("keydown", bl);


function wi(){
    document.getElementById("disk").style.backgroundColor = "orange"
}

document.addEventListener("wheel", wi)