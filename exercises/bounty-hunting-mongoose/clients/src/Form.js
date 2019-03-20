import React, { Component } from 'react';
import {withBounties} from "./BountyProvider"
class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            living:false,
            bountAmount: "",
            type: ""
        }
    }

    handleChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.postBounty(this.state);
       
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           placeholder="first Name" 
                           name="firstName" 
                           value={this.state.firstName} 
                           onChange={this.handleChange}></input>
                    <input type="text" 
                           placeholder="last Name" 
                           name="lastName" value={this.state.lastName} 
                           onChange={this.handleChange}></input>
                    <br></br>
                    <input type="checkbox"
                           name="living" 
                           value={this.state.living} 
                           onChange={this.handleChange}></input>
                    <br></br>
                    <input type="number" 
                           name="bountAmount" 
                           value={this.state.bountAmount} 
                           placeholder="amount" 
                           onChange={this.handleChange}></input>
                    <br></br>
                    <input type="text" 
                           name="type" 
                           value={this.state.type} 
                           placeholder="type" 
                           onChange={this.handleChange}></input>
                    
                    <br></br>
                    <button>submit</button>
                    
                </form>
                
            </div>
        );
    }
}

export default withBounties(Form);