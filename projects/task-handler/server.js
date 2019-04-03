const express = require("express")
const app = express()
require("dotenv").config()
const expressJwt = require("express-jwt")
const port = 5000
const mongoose = require("mongoose")

app.use(express.json())

app.use("/api", expressJwt({secret: process.env.SECRET}))


mongoose.connect("mongodb://localhost:27017/tasks", {useNewUrlParser: true}).then(() => {
    console.log("connected to MongoDB")
})



app.listen(port, () => {
    console.log(` server running on port ${port}`)
})