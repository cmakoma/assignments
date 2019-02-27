import React from 'react';
import './App.css';
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"

const App = () =>{
  let styles = {
    margin:0
  }
  return (
    <div style={styles}>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

export default App;
