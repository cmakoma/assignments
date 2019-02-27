import React from "react";



const App = () => {
  const person={
    name:"christian",
    age:23
  }
  
  return(
    <div>
       <h1>Name: { person.name } </h1>
        <p>Age: { person.age } </p>
    </div>
  )
}



export default App;