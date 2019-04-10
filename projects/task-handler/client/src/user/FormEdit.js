import React, { Component } from 'react';

class FormEdit extends Component {
    constructor(){
        super()
        this.state = {
            response:""
          
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
            e.preventDefault()
            this.props.updateTask(this.props._id, {response: this.state.response, completed: true})
            this.setState({
                response:""
            })
    }

    render(){
    

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                    placeholder="Response"
                    name="response"
                    type="text"
                    required
                    value={this.state.response}
                    onChange={this.handleChange} />
                    <br></br>
                    <button>Done</button>
                </form>
            </div>
        );
    }
}

export default FormEdit;