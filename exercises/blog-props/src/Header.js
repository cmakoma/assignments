import React from "react"
import NavBar from "./NavBar"


const Header = () => {
    let styles = {
        backgroundImage: "url(https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg)",
        display: "grid",
        dispayTemplateColumns:"auto",
        backgroundSize: "cover",
        opacity:500,
        // backgroundPositionX: "center",
        // backgroundPositionY: "center",
        // backgroundRepeatX: "no-repeat",
        // backgroundRepeatY: "no-repeat",
        margin:0,
        height: 532
    }
    return (
        <div style={styles}> 
            <div style={{backgroundColor:"black",opacity:.6}}>
                <NavBar />
                <h1 style={{color:"white",
                            fontSize:"100px",
                            textAlign:"center",
                            marginTop:100,
                            marginBottom:0}}>Clean Blog</h1>
                <p style={{color:"white",
                            fontSize:"20px",
                            textAlign:"center"}}>A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}

export default Header