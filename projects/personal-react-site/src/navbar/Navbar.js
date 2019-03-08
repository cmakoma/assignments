import React from 'react';
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
       <div className="navbar">
           <Link to="/" className="link">Home</Link>
           <Link to="/search" className="link">Search</Link>
           <Link to="/explore" className="link">Explore</Link>
       </div>
    );
};

export default Navbar;