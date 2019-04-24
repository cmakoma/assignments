import React, { Component } from 'react';
import newResume from "../images/newResume.png";
import "./Resume.css"

class Resume extends Component {
    render() {
        return (
            <div>
                <img src={newResume} alt="" className="resume"/>
            </div>
        );
    }
}

export default Resume;