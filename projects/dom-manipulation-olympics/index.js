document.getElementById("header").innerHTML += '<h1 class = "header"> javacript made this</h1>';
document.getElementById("header").innerHTML += '<h3 class = "header"><div><span class = " name">christian </span><span>wrote the javascript</span></div></h3>'

function funny(){
    document.getElementsByClassName("message left")[0].innerHTML = "hey uncle"
    document.getElementsByClassName("message right")[0].innerHTML = "sup son";
    document.getElementsByClassName("message left")[1].innerHTML = "hyd"
    document.getElementsByClassName("message right")[1].innerHTML = "great"
}
document.getElementById("fun").addEventListener('click',funny)

function rem(){
    document.getElementsByClassName("messages")[0].innerHTML = null;
}

document.getElementById("clear-button").addEventListener('click',rem)

function changeThemes(){
    if( document.getElementById("theme-drop-down").value === "theme-one"){
        document.getElementsByClassName("message left")[0].style.backgroundColor = 'blue'
        document.getElementsByClassName("message right")[0].style.backgroundColor = 'brown'
        document.getElementsByClassName("message left")[1].style.backgroundColor = 'blue'
        document.getElementsByClassName("message right")[1].style.backgroundColor = 'brown'
        
    }else{
    
        document.getElementsByClassName("message left")[0].style.backgroundColor = 'red'
        document.getElementsByClassName("message right")[0].style.backgroundColor = 'grey'
        document.getElementsByClassName("message left")[1].style.backgroundColor = 'red'
        document.getElementsByClassName("message right")[1].style.backgroundColor = 'grey'
    }
}
document.getElementById("theme-drop-down").addEventListener("change",changeThemes)



   
   var num = 0 
function sub(){

    num++;
    if(num%2 === 0){
    document.getElementsByClassName("message left")[0].innerHTML = document.getElementsByClassName("message left")[1].innerHTML
    document.getElementsByClassName("message left")[1].innerHTML = document.getElementById("input").value;
    } else{

    document.getElementsByClassName("message right")[0].innerHTML = document.getElementsByClassName("message right")[1].innerHTML
    document.getElementsByClassName("message right")[1].innerHTML = document.getElementById("input").value;
    }
}
document.getElementById("do").addEventListener("click", sub);