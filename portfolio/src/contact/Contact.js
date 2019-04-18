import React, { Component } from 'react';
import "./Contact.css"
import profile from "../images/profile.jpg"


class Contact extends Component {
    render() {
        return (
            <div>
                <img src={profile} alt="" className="image"/>
                <br></br>
                <h1> Let's work together </h1>
                <h3> Email me at <a href="mailto:nkndchris@gmail.com">nkndchris@gmail.com</a>
                    <br/>
                     Message me on <a href="https://www.linkedin.com/in/christian-makoma/">LinkedIn</a>
                </h3>
               
            </div>
        );
    }
}

export default Contact;