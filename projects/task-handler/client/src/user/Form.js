import React, { Component } from 'react';


class Form extends Component {
       constructor(){
              super()
              this.state = {
                     title: "",
                     description:""
                }
                     
       }

       handleChange = (e) => {
              this.setState({[e.target.name]:e.target.value})
       }

       handleSubmit = (e) => {
              e.preventDefault()
              this.props.postCatering(this.state)
              this.setState({
                     title: "",
                     description:"",
                        
              })
       
       }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
               <input placeholder="title"
                      name="title"
                      type="text"
                      required
                      value={this.state.title}
                      onChange={this.handleChange}></input> 
               <br></br>

             
               <textarea placeholder="Description"
                      name="description"
                      type="text"
                      required
                      value={this.state.description}
                      onChange={this.handleChange}></textarea>
               <br></br>
               
               <button>Create</button>
            </form>
        );
    }
}

export default (Form);