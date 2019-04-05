import React, { Component } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

const UserContext = React.createContext()
const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component{

    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            tasks: []

        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials).then(res => {
            const {user, token } = res.data
            localStorage.user = JSON.stringify(user)
            localStorage.setItem("token", token)
            this.setState({
                user,
                token
            }, () => this.props.history.push("/tasks"))
        })
        .catch(err => console.log(err.res.data.errMsg))
    }
    
    login = credentials => {
       axios.post("/auth/login", credentials).then(res => {
           const { user, token } = res.data
           localStorage.user = JSON.stringify(user)
           localStorage.setItem("token", token)
           this.setState({
               user,
               token
           }, () => this.props.history.push("/tasks"))
       }) 
       .catch(err => console.log(err.res.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token:"", 
            tasks: []
        }, () => this.props.history.push("/"))
    }
    render(){
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UserContext.Consumer>
)
