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

    addTask = newTask => {
        dataAxios.post("/api/tasks", newTask).then(res =>{
            this.setState(prevState => ({
                tasks: [...prevState.tasks, res.data]
            }))
        }).catch(err => console.log(err))
    }

    getTasks = () =>{
        dataAxios.get("/api/tasks").then(res => {
            console.log(res.data)
            this.setState({
                tasks: res.data
            })
        }).catch(err => console.log(err))
    }

    getTasksCompleted = () =>{
        dataAxios.get("/api/tasks/completed").then(res => {
            console.log(res.data)
            this.setState({
                tasks: res.data
            })
        }).catch(err => console.log(err))
    }


    updateTask = (id, updatedTask) => {
        dataAxios.put(`/api/tasks/${id}`, updatedTask).then(res => {
            this.setState(prevState => ({
                tasks: prevState.tasks.filter(task => task._id !== id)
            }))
        })
    }


    deleteTask = (id) => {
        console.log(id)
        dataAxios.delete(`/api/tasks/${id}`).then(res => {
            this.setState(prevState => ({
                tasks: prevState.tasks.filter(task => task._id !== id)
            }))
        })
    }


    render(){
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    addTask: this.addTask,
                    getTasks: this.getTasks,
                    getTasksCompleted: this.getTasksCompleted,
                    updateTask: this.updateTask,
                    deleteTask: this.deleteTask
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
