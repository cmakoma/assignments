import React, { Component } from 'react';
import Box from "./Box"

class App extends Component {
  
  render() {
    let styles= {
      display: "grid",
      gridGap:5,
      gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
      backgroundColor: "lightblue",
     
    }
    
    return (
      <div style={styles}>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>
        <Box info="whats up" ans="not much" qstn="then what"/>


      </div>
    )
  }
}

export default App;
