import React, { Component } from 'react';
import {withBounties} from "./BountyProvider"
import "./Bounty.css"

class Bounty extends Component {
    handleClick=()=>{
        this.props.deleteBounty(this.props.bounty._id)
    }
    render() {
        return (
            <div className="format">
                <h1>Name: {this.props.bounty.firstName} {this.props.bounty.lastName}</h1>
                <h3>Status: {this.props.bounty.living ? "living" :"dead"}</h3>
                <h2>cost: {this.props.bounty.bountAmount} $</h2>
                <button> Edit </button>
                <button onClick={this.handleClick}> Delete </button>
                

            </div>
        );
    }
}

export default withBounties(Bounty);