var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
// var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.vegan.checked) {
        diet.push(form.vegan.value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName[0].toUpperCase()+firstName.slice(1) + "\nLast Name: " + lastName[0].toUpperCase()+lastName.slice(1) + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location  + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    
}


submit.addEventListener("click",formAlert);


