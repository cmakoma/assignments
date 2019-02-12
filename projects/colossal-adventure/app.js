var readline = require('readline-sync')

var isAlive = true;
var hasWon = false;

var player1Name = readline.question("what is your name?: ")

// Character Creation

function Player (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*35)+11;
    this.hp = 150;
    this.items = [];
    this.isAlive = true;
}

var player1 = new Player(player1Name)

function Enemy (name, attack, hp){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
}
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;
var randomHigh = Math.floor(Math.random()*5)+40;

var enemy1 = new Enemy('Handyman', randomLow, 15);
var enemy2 = new Enemy('Hinox', randomMedium, 50);
var enemy3 = new Enemy('Wizzrobe',randomHigh,75)
var enemies = [enemy1, enemy2,enemy3]

// intro console.logs
console.log('welcome to the game ' + player1Name)

while(isAlive && !hasWon){
    var action = readline.keyIn("What would you like to do? [w] Walk, [p] Print Inventory and hp, [q] Quit Game ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        print()
    }else{
        console.log("see you next time "+ player1.name)
            isAlive = false
    }
}

function print(){
    if(player1.items == ""){
        console.log(" your invetory is empty and your hp is " + player1.hp)
    }else{
        console.log(" you have "+player1.items+" in your invetory and your hp is " + player1.hp )
    }
}


function walk (){
    var random = Math.floor(Math.random()*3)
    if (random === 1){
        encounter()
    }else {
        console.log('You passed a pretty tree')
    }
}

function encounter (){
    var action = readline.keyIn("Would you like to [r] Run or [f] Fight? ", {limit: 'rf'})
    if(action === 'r'){
        run()
    }else {
        var enemy = enemySelect()
        while(enemy.hp > 0 && player1.hp > 0){
            fight(enemy)
        }if(player1.hp <= 0){
            console.log(`
                                                                              
            dddddddd                                                  dddddddd
            d::::::d                                                  d::::::d
            d::::::d                                                  d::::::d
            d::::::d                                                  d::::::d
            d:::::d                                                   d:::::d 
    ddddddddd:::::d     eeeeeeeeeeee      aaaaaaaaaaaaa       ddddddddd:::::d 
  dd::::::::::::::d   ee::::::::::::ee    a::::::::::::a    dd::::::::::::::d 
 d::::::::::::::::d  e::::::eeeee:::::ee  aaaaaaaaa:::::a  d::::::::::::::::d 
d:::::::ddddd:::::d e::::::e     e:::::e           a::::a d:::::::ddddd:::::d 
d::::::d    d:::::d e:::::::eeeee::::::e    aaaaaaa:::::a d::::::d    d:::::d 
d:::::d     d:::::d e:::::::::::::::::e   aa::::::::::::a d:::::d     d:::::d 
d:::::d     d:::::d e::::::eeeeeeeeeee   a::::aaaa::::::a d:::::d     d:::::d 
d:::::d     d:::::d e:::::::e           a::::a    a:::::a d:::::d     d:::::d 
d::::::ddddd::::::dde::::::::e          a::::a    a:::::a d::::::ddddd::::::dd
 d:::::::::::::::::d e::::::::eeeeeeee  a:::::aaaa::::::a  d:::::::::::::::::d
  d:::::::::ddd::::d  ee:::::::::::::e   a::::::::::aa:::a  d:::::::::ddd::::d
   ddddddddd   ddddd    eeeeeeeeeeeeee    aaaaaaaaaa  aaaa   ddddddddd   ddddd
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
`)
            isAlive = false;
        }
        if(enemy.hp <= 0){
            console.log('good job you killed ' + enemy.name)
            var index = enemies.indexOf(enemy)
            enemies.splice(index,1)

            if(enemies== ""){
                console.log(`
                                                                   
                                                                   
                                             iiii                    
                                            i::::i                   
                                            iiii                    
                                        
wwwwwww           wwwww           wwwwwwwiiiiiii nnnn  nnnnnnnn    
w:::::w         w:::::w         w:::::w i:::::i n:::nn::::::::nn  
w:::::w       w:::::::w       w:::::w   i::::i n::::::::::::::nn 
w:::::w     w:::::::::w     w:::::w    i::::i nn:::::::::::::::n
w:::::w   w:::::w:::::w   w:::::w     i::::i   n:::::nnnn:::::n
w:::::w w:::::w w:::::w w:::::w      i::::i   n::::n    n::::n
w:::::w:::::w   w:::::w:::::w       i::::i   n::::n    n::::n
w:::::::::w     w:::::::::w        i::::i   n::::n    n::::n
w:::::::w       w:::::::w        i::::::i  n::::n    n::::n
w:::::w         w:::::w         i::::::i  n::::n    n::::n
w:::w           w:::w          i::::::i  n::::n    n::::n
www             www           iiiiiiii  nnnnnn    nnnnnn
                                        
                                        
                                        
                                        
                                        
                                        
                                        
`)
                isAlive = false
            }
            gain()
        }
    }
}

function gain(){
    var random = Math.floor(Math.random()*3)
    if(random === 0){
        player1.items.push("blowgun")
        player1.hp += 10
        console.log("hey "+player1.name+", you have activated the blowgun and 10 hp ")
    }else if(random === 1){
        player1.items.push("lance")
        player1.hp += 5
        console.log("hey "+player1.name+", you have activated the lance and 5 hp ")

    }else{
        player1.items.push("sabre")
        player1.hp += 2
        console.log("hey "+player1.name+", you have activated the sabre and 3 hp ")

    }
}

function fight (enemy){
    var random = Math.floor(Math.random()*3)
    if(random === 1){
        miss()
    }else {
        player1.hp -= enemy.attack
        enemy.hp -= player1.attack
        console.log(`Hey ${player1.name} your hp is now ${player1.hp}`)
        console.log(`You hit ${enemy.name} and their hp is ${enemy.hp}`)
    }
}

function enemySelect (){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function miss (){
    console.log('you missed ' +player1.name)
}

function run(){
    var random = Math.floor(Math.random()*2)
    if (random === 0){
        console.log("sorry " + player1.name + " you can't escape, you have to fight or run again")
        encounter()
    }else{
        console.log("yeyyy " + player1.name + " you have found an escape")
        walk()
    }
}
