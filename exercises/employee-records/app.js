var readline = require("readline-sync")
var name1 = readline.question("what is your full name?: ")
var title1 = readline.question("what is your title?: ")
var salary1 = readline.question("what is your salary?: ")
var status1 = readline.question("what is your status?: ")
var name2 = readline.question("what is your full name?: ")
var title2 = readline.question("what is your title?: ")
var salary2 = readline.question("what is your salary?: ")
var status2 = readline.question("what is your status?: ")
var name3 = readline.question("what is your full name?: ")
var title3 = readline.question("what is your title?: ")
var salary3 = readline.question("what is your salary?: ")
var status3 = readline.question("what is your status?: ")

var arr = []
function Employee(name, title, salary, status){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    

    this.printEmployeeForm = function(){
        arr.push(emp1);
        arr.push(emp2);
        arr.push(emp3);
        console.log(arr);
        
    }
}

var emp1 = new Employee(name1, title1, salary1, status1)
var emp2 = new Employee(name2, title2, salary2, status2)
var emp3 = new Employee(name3, title3, salary3, status3)
emp1.printEmployeeForm()







