import React, { Component } from 'react';
import { withUser } from './../UserProvider';
import {Link} from "react-router-dom"
import "./Navbar.css"

class NavbarUser extends Component {
    render() {
        const { logout } = this.props
        return (
            <div className="navbar">
                <Link to="/tasks/assigned" className="link">Assigned</Link>
                <Link to="/tasks/pending" className="link">Pending</Link>
                <Link to="/tasks/complete" className="link">Complete</Link>
                <Link onClick={logout} className="link">Logout</Link>
                {/* <button onClick={logout}>Logout</button> */}
            </div>
        );
    }
}

export default withUser(NavbarUser);