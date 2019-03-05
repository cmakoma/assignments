import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            edit: true,
            title: this.props.title,
            description: this.props.description,
            imgUrl: this.props.imgUrl

        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        let {title,imgUrl ,description} = this.state;
        const updatedThing = {title, imgUrl,description}
        this.props.editThing(this.props.id, updatedThing)
    }

    render() {
        const img={
        width:300,
        height:300
    }
    console.log(this.props.editThing)
        return (

            <div>
                {this.state.edit ? 
                    <div>
                        <h1 style={{width:300,
                                    padding:0,
                                    margin:0}}>{this.props.title}</h1>
                        <p style={{width:300,
                                    padding:0,
                                    margin:0}}>{this.props.description}</p>
                        <img style={img} src={this.props.imgUrl}/>
                        <br></br>
                        <button onClick={()=>this.props.deleteThing(this.props.id)}>delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                :
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        placeholder="title"
                        ></input>
                    <input type="url"
                        name="imgUrl"
                        onChange={this.handleChange}
                        value={this.state.imgUrl}
                        placeholder="image url"
                        ></input>
                    <input type="text"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                        placeholder="description"
                        ></input>
                    <br></br>
                    <button>save</button>
                </form>}
            </div>
            
            
        );
    }
}

export default List;