const express = require("express")
const app = express()
const port = 3333
const mongoose = require("mongoose")

app.use(express.json())

app.use("/bounties",require("./bountyRoutes"))


mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}).then(() => {
    console.log("connected to MongoDB")
})

app.listen(port, () => {
    console.log(`server is running port ${port}`)
})