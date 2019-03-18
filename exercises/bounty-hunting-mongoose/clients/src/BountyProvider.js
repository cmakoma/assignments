import React, { Component } from 'react';
import axios from "axios"
const {Provider,Consumer} = React.createContext()

class bountyProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }

    getBounties = () => {
        axios.get("/bounties").then(res => {
            console.log(res.data)
            this.setState({
                bounties: res.data
            })
        })
    }
    render() {
        return (
            <Provider value={{getBounties: this.getBounties}} >
                {this.props.children}
            </Provider>
        );
    }
}

export default bountyProvider;

export function withBounties (C){
    return props => <Consumer>
                        {value => <C {...value}{...props}/>}
                    </Consumer>
}