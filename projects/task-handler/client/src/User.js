import React, { Component } from 'react'
import NavbarUser from "./navbar/NavbarUser"
import Assigned from './user/Assigned.js'
import Pending from "./user/Pending.js"
import Complete from "./user/Complete.js"
import { Switch, Route} from "react-router-dom"


class User extends Component {
    render() {
        return (
            <div>
                <NavbarUser />
                <Switch>
                    <Route path="/assigned" component={Assigned} />
                    <Route path="/pending" component={Pending} />
                    <Route path="/complete" component={Complete} />
                </Switch>
                

            </div>
        );
    }
}

export default User;