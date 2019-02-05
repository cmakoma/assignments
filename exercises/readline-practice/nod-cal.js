var readline = require("readline-sync")

var num1 = readline.question("enter the first number: ")
var ope = readline.question("enter your operation: ")
var num2 = readline.question("enter the second number: ")

if(ope === "+"){
    var ans = parseInt(num1) + parseInt(num2)
    console.log(" answer is: " + ans)
}
if(ope === "/"){
    var ans = parseInt(num1) / parseInt(num2)
    console.log(" answer is: " + ans)
}
if(ope === "-"){
    var ans = parseInt(num1) - parseInt(num2)
    console.log(" answer is: " + ans)
}
if(ope === "*"){
    var ans = parseInt(num1) * parseInt(num2)
    console.log(" answer is: " + ans)
}

