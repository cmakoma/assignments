import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      list:[]

    }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState ({[event.target.name]: event.target.value}) 
  }

  handleClick = () => {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let joined = firstName + ' ' + lastName

    this.setState(prevState => {
      return {
          list:[...prevState.list, joined],
          firstName:"",
          lastName:""

      }
    })

  }



  render() {
    return (
      <div>
        <input name={"firstName"} value={this.state.firstName} placeholder={"firstName"} required onChange={this.handleChange}/>
        <input name={"lastName"} value={this.state.lastName} placeholder={"lastName"} required onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <button onClick={this.handleClick}>Add Here</button>
        <ol>{this.state.list.map(item => <li>{item}</li>)}</ol>
      </div>
    )
  }
   
}
export default App;
