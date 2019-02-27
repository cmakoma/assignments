import React from "react"

const NavaBar = () => {
    const styles={
        padding: "10px 20px",
        color: "#fff",
        textAlign:"center"
    }
    return (
        <ul style={styles}>
            <li style={{display:"inline-block",
                        padding: "10px 20px",
                        margin:"20px 400px 0px 75px",
                        fontSize:"20px"
                       }}>Start Bootstrap</li>
            <li style={{display:"inline-block",
                        marginRight:"20px",}
                        }>HOME</li>
            <li style={{display:"inline-block",
                        marginRight:"20px",}}>ABOUT</li>
            <li style={{display:"inline-block",
                        marginRight:"20px",}}>SAMPLE POST</li>
            <li style={{display:"inline-block",
                        marginRight:"20px",}}>CONTACT</li>
        </ul>
    )
}

export default NavaBar