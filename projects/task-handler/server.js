const express = require("express")
const app = express()
require("dotenv").config()
const expressJwt = require("express-jwt")
const port = 5000
const mongoose = require("mongoose")

app.use(express.json())

app.use("/api", expressJwt({secret: process.env.SECRET,
                            secret: process.env.KEYCODE_1,
                            secret: process.env.KEYCODE_2}))
                            

app.use("/auth", require("./routes/authRoutes"))
app.use("/api/tasks", require("./routes/taskRoutes"))
 

mongoose.connect("mongodb://localhost:27017/tasks", {useNewUrlParser: true}).then(() => {
    console.log("connected to MongoDB")
})

app.use((err, req, res) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({
        message: err.message
    })
})

app.listen(port, () => {
    console.log(` server running on port ${port}`)
})