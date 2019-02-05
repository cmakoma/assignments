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
        for (var i = 0; i < profile.siblings.length; i++) {
            var years = (profile.age - profile.siblings[i].age)
            console.log("christian is " + years  + " older than " + profile.siblings[i].firstName);
        };
        }
    
        
}
profile.ageDifference() 
            


    
