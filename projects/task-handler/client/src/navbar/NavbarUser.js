import React, { Component } from 'react';
import { withUser } from './../UserProvider';
import {Link} from "react-router-dom"
import "./Navbar.css"

class NavbarUser extends Component {
    render() {
        const { logout } = this.props
        return (
            <div className="navbar">
                <Link to="/assigned" className="link">Assigned</Link>
                <Link to="/pending" className="link">Pending</Link>
                <Link to="/complete" className="link">Completed</Link>
                <Link onClick={logout} className="link">Logout</Link>
            </div>
        );
    }
}

export default withUser(NavbarUser);