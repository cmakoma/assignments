import React, { Component } from 'react';
import './App.css';
import Menu from "./Menu"
import Card from "./Card"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Menu />
       <Card />
      </div>
    );
  }
}

export default App;
