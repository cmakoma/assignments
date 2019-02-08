~// arr = [1, 3, 5, 2, 90, 20]

// newArr = arr.sort(function(a,b){
//     return a-b
// })
// console.log(newArr)

// arr = [1, 3, 5, 2, 90, 20]

// newArr = arr.sort(function(a,b){
//     return b-a
// })
// console.log(newArr)


// arr = ["dog", "wolf", "by", "family", "eaten"]

// newArr = arr.sort(function(a,b){
//     return a.length-b.length
// })
// console.log(newArr)

// arr = ["dog", "wolf", "by", "family", "eaten"]

// newArr = arr.sort().reverse()

// console.log(newArr)


persons = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

newArr = persons.sort(function(a,b){
    return a.age-b.age
})
console.log(newArr)