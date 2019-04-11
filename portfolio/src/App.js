import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Navbar from "./navbar/Navbar.js"
import Home from "./home/Home.js"
import Projects from "./projects/Projects.js"
import Resume from "./resume/Resume.js"
import Contact from "./contact/Contact.js"
import Footer from "./footer/Footer.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
