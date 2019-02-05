var readline = require("readline-sync");
var name = readline.question("What is your name?: ")
console.log("welcome "+ name + " to the escape room.")


game()
 

function game(){
var choices = ["put hand in hole","find the key","open the door"]
console.log("what is choice?:")
var pick = readline.keyInSelect(choices)
console.log(" you "+choices[pick])
    if(choices[pick] === "put hand in hole"){
    console.log(" YOU DIE *^*")
        if(readline.keyInYN("would you like to play again")){
            game()
        }else{
            console.log("GOOD BYEEE!!!!!") 
        }
    }
    
    else if(choices[pick]=== "find the key"){
        console.log("CONGZ!!! YOU THE KEY")

        key()
        }

        else if(choices[pick]=== "open the door"){
        console.log("DOOR IS LOCKED, TRY AGAIN")
        
            game()
    
            }else{
            console.log("GOOD BYEEE!!!!!")
            }
}

key()

function key(){
    var choiceskey = ["put hand in hole","open the door"]
    console.log("please make a choice: ")
    var pickkey = readline.keyInSelect(choiceskey)
    console.log("you" + choiceskey[pickkey])

    if(choiceskey[pickkey] === "put hand in hole"){
        console.log(" YOU DIE *^*")
        if(readline.keyInYN("would you like to play again:")){
            game()
            }else{
            console.log("GOOD BYEEE!!!!!") 
        }
        }else if(choiceskey[pickkey] === "open the door"){
            console.log(" YOU WIN !!!!$$$$$****!!!!!!")
            if(readline.keyInYN("would you like to play again")){
            game()
                }else{
                console.log("GOOD BYEEE!!!!!") 
            }
            }else{
                console.log("GOOD BYEEE!!!!!")
            }
    
    

}

