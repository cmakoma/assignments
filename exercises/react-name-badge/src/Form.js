import React, {Component} from "react"
import Badge from "./Badge"

class Form extends Component{
    constructor(){
        super()
        this.state = {
            inputs:{
                firstName:"",
                lastName:"",
                email:"",
                birth:"",
                phone:"",
                food:"",
                about:"" 
            },
            badges:[]
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]:value
                }
            }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState =>{
            return {
                badges:[prevState.inputs,...prevState.badges],
                inputs:{
                    firstName:"",
                    lastName:"",
                    email:"",
                    birth:"",
                    phone:"",
                    food:"",
                    about:"" 
                }
            }
        })
        // console.log(this.state.badges)

    }
    render(){
        // console.log(this.state.inputs)
        const {firstName,lastName,email,birth,phone,food,about} = this.state.inputs
        const mappedBadges = this.state.badges.map((badge, i) =>{
        const backgroundColor = i % 2 === 0 ? "#e22828" : "#1b1b8c"
            return <Badge 
                        badge={badge} 
                        key={badge.firstName + i} 
                        backgroundColor={backgroundColor}/>
            
        })


        return(
            
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={this.handleChange} required></input>
                <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={this.handleChange} required></input>
                <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} required></input>
                <input type="text" placeholder="Place of Birth" name="birth" value={birth} onChange={this.handleChange} required></input>
                <input type="number" placeholder="Phone" name="phone" value={phone} onChange={this.handleChange} required></input>
                <input type="text" placeholder="Favorite Food" name="food" value={food} onChange={this.handleChange} required></input>
                <br></br>
                <input type="text" placeholder="Tell us about yourself" name="about" value={about} onChange={this.handleChange} className="about"></input>
                
                <button className="button">submit</button>

            </form>
            {mappedBadges}

        </React.Fragment>
        )
    }
}

export default Form