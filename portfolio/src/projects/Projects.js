import React, { Component } from 'react';
import "./Projects.css"
import xplor from "../images/xplor.png"
import zenGarden from "../images/zenGarden.png"
import task from "../images/task.jpg"
import evas from "../images/Evas.jpg"

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

                <a href="https://github.com/danielmruales/evas-bakery" className="bottomRight">
                    <img src={evas} alt=""/>
                </a>

                <a href="https://github.com/cmakoma/assignments/tree/master/projects/task-handler" className="bottomLeft">
                    <img src={task} alt=""/>
                </a>

            </div>
        );
    }
}

export default Projects;