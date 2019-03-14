const express = require("express")
const todoRouter = express.Router()
const todo = require("./todoList")
const Todo = require("./todo")



todoRouter.route("/")
    .get((req,res)=>{
        res.send(todo)
    })


    .post((req,res)=>{
        if (Object.keys(req.body).length !== 0){
            const newTask = new Todo(req.body)
            newTask.save(err => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(newTask)
            })
        }else{
            res.send("new post failed")
        }
        
    })

todoRouter.route("/task/:_id")
    .put((req,res)=>{
        const updateTask = req.body;
        const {_id} = req.params;
        todo.forEach(task => {
            task._id === _id ? task = Object.assign(task,updateTask) : null
        })
    
        res.send(todo)
    
    })
    
    
    .delete((req,res)=>{
        const {_id} = req.params
        const index = todo.findIndex(task => task._id === _id)
        todo.splice(index, 1)
        res.send(" deleted task successful")
    }) 


    module.exports = todoRouter