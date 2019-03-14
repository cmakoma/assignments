const express = require("express")
const app = express()
const uuid = require("uuid")
const bounties = require("./BountiesList")
const port = 5999

app.use(express.json())


app.get("/bounty", (req,res) => {
    res.send(bounties)
})

app.get("/bounty/:_id", (req,res) => {
    let {_id} = req.params
    let found = bounties.find(bounty => bounty._id === _id)
    found ? res.send(found) : res.send(`bounty not found`)
    
})

app.post("/bounty", (req,res) => {
    const newBounty = req.body;
    newBounty._id = uuid.v4();
    bounties.push(newBounty)
    res.send(newBounty)
})

app.put("/bounty/:_id",(req,res) => {
    const {_id} = req.params
    const updateBounty = req.body
    bounties.forEach(bounty => bounty._id === _id ? bounty = Object.assign(bounty,updateBounty) : null)
    let found = bounties.find(bounty => bounty._id === _id)
    found ? res.send(found) : res.send(`bounty not found for update`)

})

app.delete("/bounty/:_id",(req,res) => {
    const {_id} = req.params
    const index = bounties.findIndex(bounty => bounty._id === _id)
    index !== -1 ? bounties.splice(index,1) & res.send(`delete successful`) : res.send (`bounty not found`)
    
})


app.listen(port, () =>{
    console.log(`you are using port ${port}`)
})