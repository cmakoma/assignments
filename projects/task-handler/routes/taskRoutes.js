const express = require("express")
const taskRoute = express.Router()
const Task = require("../models/task")

taskRoute.route("/")
    .get((req, res, next) => {
        Task.find({user: req.res._id})
    })