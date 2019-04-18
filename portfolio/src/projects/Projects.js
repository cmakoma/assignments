import React, { Component } from 'react';
import "./Projects.css"
import xplor from "../images/xplor.png"
import zenGarden from "../images/zenGarden.png"
// import taskHandle from "../images/taskHandle.png"

class Projects extends Component {
    render() {
        return (
            <div className="mainDiv">
                <a href="http://xplor.surge.sh/" className="topLeft">
                    <img src={xplor} alt=""/>
                </a>

                <a href="http://christian-css-zen-garden.surge.sh/" className="topRight">
                    <img src={zenGarden} alt=""/>
                </a>

                <a href="http://xplor.surge.sh/" className="bottomLeft">
                    <img src={xplor} alt=""/>
                </a>

                <a href="http://christian-css-zen-garden.surge.sh/" className="bottomRight">
                    <img src={zenGarden} alt=""/>
                </a>
                

            </div>
        );
    }
}

export default Projects;