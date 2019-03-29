const express = require("express")
const app = express()
require("dotenv").config()
const expressJwt = require("express-jwt")
const port = 3333
const mongoose = require("mongoose")

app.use(express.json())

app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/api/bounties",require("./routes/bountyRoutes"))
app.use("/auth", require("./routes/authRoutes"))

mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}).then(() => {
    console.log("connected to MongoDB")
})


app.use((err, req, res) => {
    console.error(err);
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({
        message: err.message
    })
})


app.listen(port, () => {
    console.log(`server is running port ${port}`)
})