import React, { Component } from 'react';
import "./Contact.css"
import profile from "../images/profile.jpg"


class Contact extends Component {
    render() {
        return (
            <div>
                <img src={profile} alt="" className="image"/>
                hey
            </div>
        );
    }
}

export default Contact;