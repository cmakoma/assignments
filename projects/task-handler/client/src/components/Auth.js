import React, { Component } from 'react';
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import { withUser } from '../UserProvider';
class Auth extends Component {
    constructor(){
        super()
        this.state = {
            fullname: "",
            keyCode: "",
            username: "",
            password: "",
            formToggle: false
        }
    }
    toggleForm = () => {
        this.setState(prevState => ({formToggle: !prevState.formToggle }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(credentials)

        this.setState({
            username: "",
            password: ""
        })
    }

    handleSignupSubmit = e => {
        e.preventDefault()

        const credentials = {
            fullname: this.state.fullname,
            keyCode: this.state.keyCode,
            username: this.state.username,
            password: this.state.password
        }
        this.props.signup(credentials)

        this.setState({
            fullname: "",
            keyCode: "",
            username: "",
            password: ""
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.formToggle ? 
                <>
                    <h1>Sign Up</h1>
                    <SignupForm 
                        fullname={this.state.fullname} 
                        keyCode={this.state.keyCode}
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignupSubmit}
                        btnText="Sign up" 
                    />
                    <p onClick={this.toggleForm}>Already a user?</p>
                </>
                :
                <>
                    <h1>Login</h1>
                    <LoginForm 
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLoginSubmit}
                        btnText="Login"
                    />
                    <p onClick={this.toggleForm}>Not a user yet?</p>

                </>
                }
            </div>
        );
    }
}

export default withUser(Auth);