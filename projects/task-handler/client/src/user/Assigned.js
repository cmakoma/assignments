import React, { Component } from 'react';
import { withUser } from '../UserProvider';
import FormEdit from "./FormEdit"
import "./User.css"

class Assigned extends Component {
    componentDidMount(){
        this.props.getTasks()
    }

    render() {
        const displayTasks = this.props.tasks.map(task => {
            return (
                <div className = "display">
                    <h3>Task: {task.title}</h3>
                    <h3>Description: {task.description}</h3>
                    <FormEdit {...task} updateTask={this.props.updateTask}/>
                </div>
                )
        })
        return (
            <div >
                <h1> Assigned Tasks</h1>
                <div>{displayTasks}</div>
                
                
            </div>
        );
    }
}

export default withUser(Assigned);