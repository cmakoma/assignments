const express = require("express")
const app = express()
const todo = require("./todoList")
const uuid = require("uuid")
const port = 5664

app.use(express.json())

app.get("/",(req,res)=>{
    res.send(todo)
})

app.post("/task", (req,res)=>{
    const newTask = req.body
    newTask._id = uuid.v4()
    todo.push(newTask)
    res.send(newTask)
})

app.put("/task/:_id", (req,res)=>{
    const updateTask = req.body;
    const {_id} = req.params;
    todo.forEach(task => {
        task._id === _id ? task = Object.assign(task,updateTask) : null
    })

    res.send(todo)
  
})


app.delete("/task/:_id", (req,res)=>{
    const {_id} = req.params
    const index = todo.findIndex(task => task._id === _id)
    todo.splice(index, 1)
    res.send(" deleted task successful")
}) 

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})