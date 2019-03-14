const express = require("express")
const app = express()
const port = 5664
const mongoose = require("mongoose")

app.use(express.json())

app.use("/task",require("./todoRouter"))


mongoose.connect("mongodb://localhost:27017/todoList",{useNewUrlParser:true}).then(()=>{
    console.log("connected to MongoDB")
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})