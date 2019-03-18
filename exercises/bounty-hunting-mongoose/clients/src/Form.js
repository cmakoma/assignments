import React, { Component } from 'react';

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
    render() {
        return (
            <div>
                <form>
                    <input type="text"></input>
                    <input type="text"></input>
                    <br></br>
                    <input type="radio"></input>
                    <input type="radio"></input>
                    <br></br>
                    <input type="number"></input>
                    <br></br>
                    <input type="radio"></input>
                    <input type="radio"></input>
                    <br></br>
                    <button>submit</button>
                    
                </form>
                
            </div>
        );
    }
}

export default Form;