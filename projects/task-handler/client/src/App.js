import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Auth from "./components/Auth.js"
import{ withUser} from "./UserProvider"
import Logo from "./logo/Logo"
import Footer from "./footer/Footer.js"
import "./App.css"
import User from "./User"
import Admin from "./Admin"

 

class App extends Component {
  render() {
    const { token } = this.props
    return (
      
      <div className="App">
          <Logo />
          {token ? (this.props.user.keyCode === "teammate" ? <User /> : <Admin />) : null}
          <Switch>
              <Route exact path="/" render={rProps => <Auth {...rProps}/>} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withUser(App);
