import React, { Component } from 'react';
import axios from "axios"
import List from "./List"

class UglyList extends Component {
    constructor(){
        super()
        this.state={
            inputs:{
                title:"",
                imgUrl:"",
                description:""
            },
            things: []

        }
    }

    async componentDidMount(){
        const response = await axios.get("https://api.vschool.io/christianuglythings/todo")
        this.setState({
           things: response.data 
        })
    }

    handleChange = e => {
        let {name,value} = e.target
        this.setState(prevState =>({
            inputs: {
                ...prevState.inputs,
                [name]: value,

            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post("https://api.vschool.io/christianuglythings/todo",this.state.inputs).then(response=>{
            this.setState(prevState=>({
                things:[response.data, ...prevState.things],
                inputs:{
                    title:"",
                    imgUrl:"",
                    description:""
                }
            }))
        })
    }

    editThing = (id,updatedThing) =>{
        axios.put(`https://api.vschool.io/christianuglythings/todo/${id}`,updatedThing).then(response => {
            this.setState(prevState=>({
                things: prevState.things.map(thing => thing._id === id ? thing = updatedThing : thing)
            }))
        })
    }

    deleteThing = id => {
        axios.delete(`https://api.vschool.io/christianuglythings/todo/${id}`).then(response => {
            this.setState(prevState =>({
                things: prevState.things.filter(thing =>thing._id !== id)
            }))
        })
    }

    render() {
        const mappedThings = this.state.things.map((thing) => <List title={thing.title}
                                                                  imgUrl={thing.imgUrl} 
                                                                  description={thing.description} 
                                                                  key={thing._id}
                                                                  id={thing._id}
                                                                  deleteThing={this.deleteThing}
                                                                  editThing={this.editThing} />)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           name="title"
                           onChange={this.handleChange}
                           value={this.state.inputs.title}
                           placeholder="title"
                           ></input>
                    <input type="url"
                           name="imgUrl"
                           onChange={this.handleChange}
                           value={this.state.inputs.imgUrl}
                           placeholder="image url"
                           ></input>
                    <input type="text"
                           name="description"
                           onChange={this.handleChange}
                           value={this.state.inputs.description}
                           placeholder="description"
                           ></input>
                    <br></br>
                    <button>submit</button>
                </form>

                <div>
                    {mappedThings}
                </div>
            </div>
        );
    }
}

export default UglyList;