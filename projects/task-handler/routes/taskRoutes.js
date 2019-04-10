const express = require("express")
const taskRoute = express.Router()
const Task = require("../models/task")

taskRoute.route("/")
    .get((req, res, next) => {
        Task.find({completed: false}, (err, tasks) => {
            if(err){
                res.status(500)
                return next(err)
            }
            console.log(tasks)
            return res.status(200).send(tasks)
        })
    })

    .post((req, res, next) => {
        console.log(req.body)
        if(Object.keys(req.body).length !== 0){
            const newTask = new Task(req.body)

            newTask.user = req.user._id

            newTask.save(err => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(newTask)
            })
        }else{
            res.send("new post failed")
        }
    })

    taskRoute.route("/completed")
    .get((req, res, next) => {
        Task.find({completed: true}, (err, tasks) => {
            if(err){
                res.status(500)
                return next(err)
            }
            console.log(tasks)
            return res.status(200).send(tasks)
        })
    })

taskRoute.route("/:_id")
    .put((req, res, next) => {
        Task.findOneAndUpdate({_id: req.params._id}, req.body,{new: true}, (err,task) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(task)
        })
    })

    .delete((req, res, next) => {
        console.log(req.params)
        Task.findOneAndDelete({_id: req.params._id}, req.body, (err, task) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send('delete successful')
        })
    })
    
    .get((req, res, next) => {
        Task.findOne({_id: req.params._id, user: req.user._id}, (err, task) => {
            if(err){
                res.status(500)
                return next(new Error("no task found"))
            }
            return res.status(200).send(task)
        })
    })


module.exports = taskRoute
