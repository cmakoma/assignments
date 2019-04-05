import React, { Component } from 'react';
import { withUser } from './UserProvider';

class Navbar extends Component {
    render() {
        const { logout } = this.props
        return (
            <div>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }
}

export default withUser(Navbar);