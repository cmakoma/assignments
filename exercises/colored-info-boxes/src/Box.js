import React from "react"

const Box = (props) => {
    const random = Math.floor(Math.random()*6)

    const styles={
        border:"2px blue Solid",
        height:"300px",
        textAlign:"center"
    }
    if(random === 0){
        styles.backgroundColor = "red"
    }
    if(random === 1){
        styles.backgroundColor = "blue"
    }
    if(random === 2){
        styles.backgroundColor = "green"
    }
    if(random === 3){
        styles.backgroundColor = "yellow"
    }
    if(random === 4){
        styles.backgroundColor = "purple"
    }
    if(random === 5){
        styles.backgroundColor = "orange"
    }
    return (
        <div style={styles}> 
            <h1>{props.info}?</h1>
            <p>{props.ans}</p>
            <h3>{props.qstn}</h3>
        </div>
    )
}

export default Box