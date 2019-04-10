import React, { Component } from 'react';
import { withUser } from '../UserProvider';
import {Link} from 'react-router-dom'
import "./Navbar.css"



class NavbarAdmin extends Component {
    render() {
        const { logout } = this.props
        return (
            <div className="navbar">
                <Link to="/create" className="link">Create</Link>
                <Link to="/feedback" className="link">Feedback</Link>
                <Link to="/completed" className="link">Completed</Link>
                <Link onClick={logout} className="link">Logout</Link>

            </div>
        );
    }
}

export default withUser(NavbarAdmin);