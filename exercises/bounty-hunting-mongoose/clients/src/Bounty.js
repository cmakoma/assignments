import React, { Component } from 'react';

class Bounty extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.bounty.firstName}</h1>
            </div>
        );
    }
}

export default Bounty;