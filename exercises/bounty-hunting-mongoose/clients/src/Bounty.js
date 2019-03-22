import React, { Component } from 'react';
import {withBounties} from "./BountyProvider"
import "./Bounty.css"
import Form from "./Form"

class Bounty extends Component {
    constructor(){
        super()
        this.state={
            toggled:true
        }
    }
    handleClick=()=>{
        this.props.deleteBounty(this.props.bounty._id)
    }

    toggle=()=>{
        this.setState(prevState =>({
            toggled: !prevState.toggled
        }))
    }
    render() {
        return (
            <div>
                {this.state.toggled ? 
                <div className="format">
                    <h1>Name: {this.props.bounty.firstName} {this.props.bounty.lastName}</h1>
                    <h3>Status: {this.props.bounty.living ? "living" :"dead"}</h3>
                    <h2>cost: {this.props.bounty.bountAmount} $</h2>
                    <button onClick={this.toggle}> Edit </button>
                    <button onClick={this.handleClick}> Delete </button>
                </div>
                :
                <Form button="save" {...this.props.bounty} type="edit" />}
            </div>
        );
    }
}

export default withBounties(Bounty);