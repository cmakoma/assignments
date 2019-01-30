var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();
// fruit.indexOf("orange");
fruit.push(fruit.indexOf("orange"));
vegetables.push(vegetables.length);

food = fruit.concat(vegetables);
food.splice(4,2)
food.reverse()
function rem(food){

return food.join(',')
}

// console.log(vegetables)
// console.log(fruit)
// console.log(fruit.indexOf("orange"))
console.log (rem(food))









