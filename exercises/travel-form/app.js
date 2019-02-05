var fi = document.getElementsByClassName("fis");
var la = document.getElementsByClassName("las");
var se = document.getElementById("select");
var ch = document.getElementsByClassName("check");
var bu = document.getElementById("fly");

var form = document.travel
console.log(document.travel);

bu.addEventListener("click", sub)

function sub(e) {
    e.preventDefault();

    var first = form.firstName.value
    var last = form.lastName.value
    var age = form.age.value
    var gender = form.sex.value
    var dest = form.selection.value 
    var sel = []
    
        for(i=0; i< form.meal.length; i++){
            if (form.meal[i].checked === true)
            sel.push(form.meal[i].value)
        }


    alert(`first Name : ${first}\n last Name : ${last}\n Age : ${age}\n Gender : ${gender}\n Destination : ${dest}\n Meal : ${sel}`)
            
}