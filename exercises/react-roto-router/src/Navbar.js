import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
    const styles = {
        marginLeft: "5%",
        height:200,
    }
    return (
        <div style={styles}>
            <Link to="/" style={{textDecoration:"none",marginLeft: "5%"}}>Home </Link>
            <Link to="/about" style={{textDecoration:"none",marginLeft: "5%"}}>About</Link>
            <Link to="/services" style={{textDecoration:"none",marginLeft: "5%"}}>services</Link>
        </div>
    )
}

export default Navbar