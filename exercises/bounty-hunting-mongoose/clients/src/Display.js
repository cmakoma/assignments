import React, { Component } from 'react';
import {withBounties} from "./BountyProvider"
// import Bounty from "./Bounty"

class Display extends Component {
   componentDidMount(){
       this.props.getBounties()
   }
    
    render() {
        // const mappedBounties = this.props.bounties.map(bounty => <Bounty bounty={bounty}/>)
        return (
            <div>
                {/* {mappedBounties} */}
            </div>
        );
    }
}

export default withBounties(Display);