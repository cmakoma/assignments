const express = require("express")
const bountyRoute = express.Router()
const Bounty = require("./bounty")


bountyRoute.route("/")
    .get((req,res) => {
        Bounty.find((err,bounties)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })

    .post((req,res) => {
        if (Object.keys(req.body).length !== 0){
            const newBounty = new Bounty(req.body)
            newBounty.save(err => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(newBounty)
            })
        }else{
            res.send("new post failed")
        }
        
    })



bountyRoute.route("/:_id")


    .put((req,res) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            (err,bounty)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            })
        })


    .delete((req,res) => {
        Bounty.findOneAndDelete(
            {_id: req.params._id},
            req.body,
            (err,bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
        })

    .get((req,res) => {
        console.log("hello")
        Bounty.findById(
            {_id: req.params._id},
            (err,bounty) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })
    




module.exports = bountyRoute