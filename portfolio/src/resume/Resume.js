import React, { Component } from 'react';
import resume from "../images/resume.png";
import "./Resume.css"

class Resume extends Component {
    render() {
        return (
            <div>
                <img src={resume} alt="" className="resume"/>
            </div>
        );
    }
}

export default Resume;