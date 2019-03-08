import React from 'react';
import "./App.css"
import Header from "./header/Header"
import Navbar from "./navbar/Navbar"
import Home from "./home/Home"
import Search from "./search/Search"
import Explore from "./explore/Explore"
import Footer from "./footer/Footer"
import {Switch,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/explore" component={Explore}/>
      </Switch>
      <br></br>
      <Footer />
    </div>
  );
};

export default App;
