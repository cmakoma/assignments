import React, { Component } from 'react';
import {withBounties} from "./BountyProvider"
import "./Form.css"

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: props.firstName ? props.firstName : "",
            lastName: props.lastName ? props.lastName : "",
            living: props.living ? props.living : false,
            bountAmount: props.bountAmount ? props.bountAmount : "",
            type: props.type ? props.type : ""
        }
    }

    // componentDidMount(){
    //     if(this.props.type === "edit"){
    //         this.setState({
    //             firstName:this.props.firstName,
    //             lastName: this.props.lastName,
    //             iving: this.props.living,
    //             bountAmount: this.props.bountAmount,
    //             type: this.props.type


    //         })
    //     }
    // }
    handleChange=(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props)
        this.props.type === "add" ? this.props.postBounty(this.state) : this.props.putBounty( this.props._id, this.state);
       
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