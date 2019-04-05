import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Auth from "./components/Auth.js"
import Tasks from "./components/Tasks"
import{ withUser} from "./UserProvider"
import Logo from "./logo/Logo"
import Navbar from "./Navbar"
import Footer from "./footer/Footer.js"
import "./App.css"
 

class App extends Component {
  render() {
    const { token } = this.props
    return (
      
      <div className="App">
          <Logo />
          {token && <Navbar />}
          <Switch>
              <Route exact path="/" render={rProps => <Auth {...rProps}/>} />
              <Route path="/tasks" render={rProps => <Tasks {...rProps}/>} />
              <Route />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withUser(App);
