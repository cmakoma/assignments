import React, { Component } from 'react';
import NavbarAdmin from './navbar/NavbarAdmin.js';

import Create from "./user/Create"

class Admin extends Component {
    render() {
        return (
            <div>
                <NavbarAdmin />
                <Create />
            </div>
        );
    }
}

export default Admin;