import React, { Component } from 'react';
import "./Questions.css"

class Questions extends Component {
    render() {
        return (
            <div>
               <h1>kwonledge Questions</h1>
               <p>your welcome to try some</p>
               <p>Question: Engine failure at 33 seconds and loss of vehicle, what was the mission name??</p>
               <br></br>
               <p>Answer:
                   <input/>
                   Good job or nice try, the Answer is FalconSat
                   </p>
            </div>
        );
    }
}

export default Questions;