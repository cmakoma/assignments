import React from "react"

const VacationSpots = (props) => {
    const styles = {
        border:"double 2px black ",
        backgroundColor:"lightblue"

      }
    return (
        <div style={styles}>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2>
            <p>{props.timeToGo}</p>

        </div>
    )
}




export default VacationSpots