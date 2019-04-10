import React, { Component } from 'react';
import NavbarAdmin from './navbar/NavbarAdmin.js';
import { Switch, Route} from "react-router-dom"

import Create from "./admin/Create.js"
import Feedback from './admin/Feedback.js';
import Completed from './admin/Completed.js';

class Admin extends Component {
    render() {
        return (
            <div>
                <NavbarAdmin />
                <Switch>
                    <Route path="/create" component={Create} />
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/completed" component={Completed} />
                </Switch>
            </div>
        );
    }
}

export default Admin;