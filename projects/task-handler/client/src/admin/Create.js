import React, { Component } from 'react';
import {withUser} from '../UserProvider';
import Form from "./Form"

class Create extends Component {
    constructor(){
        super()
        this.state = {
                title: "",
                description:"",
                response:"",
                feedback:"",
                complete: false
                
    }
    }
    handleChange = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
    }

    handleSubmit = (e) => {
       
            e.preventDefault()
            this.props.addTask(this.state)
            this.setState({
                title: "",
                description:"",
                response:"",
                feedback:"",
                complete: false
                    
            })
    
    }

    render() {
        return (
            <div>
                <h1> Create New Task</h1>
                <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}/>
            </div>
        )
    }
}

export default withUser(Create);