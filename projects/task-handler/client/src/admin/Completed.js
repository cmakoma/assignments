import React, { Component } from 'react';
import { withUser } from '../UserProvider';
import "./Admin.css"

class Completed extends Component {
    componentDidMount(){
        this.props.getTasksCompleted()
    }

    

    render() {
        const displayTasksCompleted = this.props.tasks.map(task => {
            console.log(task._id)
            const {_id} = task
            
            return (
                <div className="display" >
                    <h3>task: {task.title}</h3>
                    <h3>description: {task.description}</h3>
                    <h3>Response: {task.response}</h3>
                    <button onClick={() => this.props.deleteTask(_id)}>Clear</button>
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

export default withUser(Completed);