import React, { Component } from 'react';
import "./Questions.css"
import { withData } from "./../../DataProvider"
class Questions extends Component {
    constructor(){
        super()
        this.state={
            answer:"",
            submit: false
        }
    }
    componentDidMount() {
        this.props.getData()
    }
    handleSubmit = (e) => {
        e.preventDefault() 
        this.setState(prevState =>({
            submit: !prevState.submit
        }))


    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:[e.target.value]
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Knowledge Questions</h1>
                <p>you're welcome to try some</p>
                <p>Question: {this.props.question}. which mission was that?</p>
                <br></br>
                <p>Answer:
                   <input type="text" name="answer" value={this.answer} onChange={this.handleChange} required/>
                    <button>submit</button>
                     {this.state.submit ? this.state.answer == this.props.answer ? "Good job" : `nice try your answer is ${this.state.answer}, the correct Answer is ${this.props.answer}`: null}
                </p>
                

            </form>
        );
    }
}

export default withData(Questions);