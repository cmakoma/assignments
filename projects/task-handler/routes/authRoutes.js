const express = require("express")
const User = require("../models/user")
const authRoute = express.Router()
const jwt = require("jsonwebtoken")

authRoute.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(existingUser !== null) res.status(400).send(new Error ("that username already exists!"))

        if(req.body.keyCode === process.env.KEYCODE_1 || req.body.keyCode === process.env.KEYCODE_2){

            const newUser = new User(req.body)
            newUser.save((err, user) => {
                if(err){
                    res.status(200)
                    return next(err)
                }

                const token = jwt.sign(user.toObject(), process.env.SECRET)
                return res.status(200).send({
                    success: true,
                    user: user.toObject(), 
                    token
                })
            })
        }else{
            res.status(500)
            return next(new Error("invalid key code"))
        }
    })
})

authRoute.post("/login", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()},(err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        console.log(req.body.password)
        if(!user || user.password !== req.body.password){
            res.send(403)
            return next(new Error("Email or password incorrect"))   
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)

        return res.status(200).send({
            token,
            user: user.toObject(),
            success: true
        })
    })
})

module.exports = authRoute