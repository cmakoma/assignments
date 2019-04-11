import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons'
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <SocialIcon  target="_blank" url="https://www.linkedin.com/in/christian-makoma/" network="linkedin" bgColor="black" fgColor="#5a9b05"/>
                <SocialIcon  target="_blank" url="https://github.com/cmakoma" network="github" bgColor="black" fgColor="#5a9b05"/>
            </div>
        );
    }
}

export default Footer;