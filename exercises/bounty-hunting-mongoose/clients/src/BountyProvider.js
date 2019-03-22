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
            this.setState({
                bounties: res.data
            })
        })
    }


    postBounty = (newBounty) => {
        axios.post("/bounties",newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, newBounty]
            }))
        })
    }

    putBounty = (id, updateBounty) => {
        axios.put(`/bounties/${id}`, updateBounty).then(res =>{
            this.setState(preState => ({
                bounties: preState.bounties.map(bounty => bounty._id === id ? bounty = updateBounty : bounty)
            }))
        })
    }

    
    deleteBounty =(id)=>{
        axios.delete(`/bounties/${id}`).then(res =>{
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== id)
            }))
        })
    }
    render() {
        return (
            <Provider value={{getBounties: this.getBounties,
                              postBounty: this.postBounty,
                              deleteBounty: this.deleteBounty,
                              putBounty: this.putBounty,
                            //   bounty: this.bounty,
                             ...this.state}} >
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