var profile = {
    firstName : "Christian",
    lastName : "Makoma",
    age : 23,
    siblings : [
        {
            firstName : "pauline",
            lastName : "Makoma",
            age : 21,
        },
        {
            firstName : "william",
            lastName : "Makoma",
            age : 18,
        }
    ],
    ageDifference : function(){
        for (var i = 0; i < 2; i++) {
            var years = (profile.age - profile.siblings[i].age)
            console.log(years);
        };
        }
    
        
}
profile.ageDifference() 
            


    
