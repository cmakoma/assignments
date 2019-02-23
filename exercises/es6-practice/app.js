// let name = "John"
// const age = 101
// const pets = ["cat", "dog"]
// const petObjects = []

// function runForLoop() {
//     for ( i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }

// console.log(runForLoop())


// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = arr => arr.map(carrot => ({type: "carrot", name: carrot}))
    
 
// console.log(mapVegetables(carrots))


// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// filterForFriendly = arr => (arr.filter(person => !!person.friendly))

// console.log(filterForFriendly(people))


// doMathSum = (a, b) => a + b

// console.log(doMathSum(3, 4))

//  produceProduct = (a, b) => a * b

//  console.log(produceProduct(2,4))

//  printString = (firstName = "Jane",lastName = "Doe", age = "100") => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

//  console.log(printString())

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  filterForDogs = arr => (arr.filter(animal => animal.type === "dog"? true : false))
         

//  console.log(filterForDogs(animals))

// greetings = (name,destiantion) => `Hi ${name}!\n \nWelcome to ${destiantion}.\n \nI hope you enjoy your stay. Please ask the president of Hawaii if you need anything. `

// console.log(greetings("christian","mexico"))

// animals = ["cow","rat"]
// collectAnimals = (...animal) => [...animal,...animals]

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))


// combineFruit = (fruit, sweets, vegetables) => [{"fruit":fruit},{"sweets":sweets},{"vegetables":vegetables}]

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrit"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };
  
//   parseSentence = ({location,duration}) =>`We're going to have a good time in ${location} for ${duration}`

//   console.log(parseSentence(vacation))

// const items = ["car","house","tree"]
// returnFirst = ([firstItem])=> firstItem
// console.log(returnFirst(items))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// returnFavorites = ([firstFav,secondFav,thirdFav]) => `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`

// console.log(returnFavorites(favoriteActivities))

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals= (arr1,arr2,arr3) => [...arr1,...arr2,...arr3]
// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


// const numbers = [1,2,3,4,5];
// product=(numbers) => numbers.reduce((acc, number) => acc * number)
// console.log(product(numbers))  

// unshift = (array, a, b, c, d, e) => [a, b, c, d, e,...array]

// console.log(unshift([1,2,3,4],hey, you, how, doing,sir))



// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ")
//         const [firstName, lastName] = name;
//         return { firstName, lastName }
//         })
//     }
// namers = ["Frank Peterson", "Suzy Degual", "Liza Jones"]
// console.log(populatePeople(namers));

  