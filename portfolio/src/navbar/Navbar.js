import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/" className="link">Home</Link>
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/resume" className="link">Resume</Link>
                <Link to="/contact" className="link">Contact</Link>

            </div>
        );
    }
}

export default Navbar;