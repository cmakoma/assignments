const express = require("express")
const bountyRoute = express.Router()
const Bounty = require("../models/bounty")


bountyRoute.route("/")
    .get((req,res,next) => {
        Bounty.find({user: req.user._id},(err,bounties)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
        })
    })

    .post((req, res, next) => {
        if (Object.keys(req.body).length !== 0){
            const newBounty = new Bounty(req.body)

            newBounty.user = req.user._id

            newBounty.save(err => {
                if (err){ 
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(newBounty)
            })
        }else{
            res.send("new post failed")
        }
        
    })

bountyRoute.route("/:_id")


    .put((req,res, next) => {
        Bounty.findOneAndUpdate(
            {_id: req.params._id, user: req.user._id},
            req.body,
            (err,bounty)=>{
                if(err){ 
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(bounty)
            })
        })


    .delete((req,res, next) => {
        Bounty.findOneAndDelete(
            {_id: req.params._id, user: req.user._id},
            req.body,
            (err,bounty) => {
                if(err){ 
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(bounty)
            }
        )
        })

    .get((req,res, next) => {
        console.log("hello")
        Bounty.findOne(
            {_id: req.params._id, user: req.user._id},
            (err,bounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                if(!bounty){
                    res.status(404)
                    return next(new Error("No bounty found"))
                }
                return res.status(200).send(bounty)
            }
        )
    })
    




module.exports = bountyRoute