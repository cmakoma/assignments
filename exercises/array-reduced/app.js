// arr = [1,2,3]
// newArr = arr.reduce(function(a,b){
//     return a+b
// })
// console.log(newArr)

// arr = [1,2,3]
// newArr = arr.reduce(function(a,b){
//     return a + String(b)
// }, '')
// console.log(newArr)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// numVoters = voters.reduce(function(a,voter){
    
//     if(voter.voted){
        
//         return a + 1
//     }else{
//         return a + 0
//     }
// }, 0)

// console.log(numVoters)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// // var total = 0
// var totals = wishlist.reduce(function(a,b){
//       return a + b.price
// },0)
// console.log(totals)


// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// var newArr = arrays.reduce(function(arr1,arr2){
//     return arr1.concat(arr2)
// })

// console.log(newArr)


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

var results = {
    youth: 0,
    youthVotes: 0,
    mid: 0,
    midVotes: 0,
    old: 0,
    oldVotes: 0
}
var result = voters.reduce(function(total, voter){
    
    if(voter.age >= 18 && voter.age <=25 ){
        results.youth++
        if(voter.voted){
            results.youthVotes++
        }
    }
    
    else if(voter.age >= 26 && voter.age <=35){
              results.mid++;
              if(voter.voted){
                  results.midVotes++
              }
    }
    
    else if(voter.age >= 36 && voter.age <=55){
        results.old++
        if(voter.voted){
            results.oldVotes++
        }
    }
    
    return results
},0);

console.log(result);