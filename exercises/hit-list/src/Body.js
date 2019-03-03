import React, { Component } from 'react';
import axios from "axios"
import Profile from "./Profile"

class Body extends Component {
    constructor(){
        super ()
        this.state={
                name:"",
                people: []
        }
    }
    async componentDidMount(){
       const response  = await axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
       this.setState({
           people: response.data
       })
    }
    render() {
        const mappedpeople = this.state.people.map(person => <Profile   image={person.image}
                                                                        name={person.name}
                                                                         />)
        return (
            <div>
                {mappedpeople}
            </div>
        );
    }
}

export default Body;