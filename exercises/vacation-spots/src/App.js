import React from "react"
import VacationSpots from "./VacationSpots"

const spots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring"
  },
  {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: 1100,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]

const App = () => {
    
    const mappedVacations = spots.map((spot) =>{

      return (
          <VacationSpots
            place={spot.place} 
            price={spot.price} 
            timeToGo={spot.timeToGo}
          />
      )
    })

    const styles = {
      display:"grid",
      gridGap:5,
      gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr)"
      
    }
        return (
      
          <div style={styles}> 
          {mappedVacations}
          </div>
        )
}



export default App