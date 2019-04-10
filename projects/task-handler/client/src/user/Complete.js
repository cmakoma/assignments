import React, { Component } from 'react';
import { withUser } from '../UserProvider';
import "./User.css"

class Complete extends Component {
    componentDidMount(){
        this.props.getTasksCompleted()
    }

    render() {
        const displayTasksCompleted = this.props.tasks.map(task => {
            return (
                <div className="display" >
                    <h3>task: {task.title}</h3>
                    <h3>description: {task.description}</h3>
                    <h3>Response: {task.response}</h3>
                </div>
                )
        })
        return (
            <div>
                <h1> Completed Tasks</h1>
                <div>{displayTasksCompleted}</div>
                
                
            </div>
        );
    }
}

export default withUser(Complete);