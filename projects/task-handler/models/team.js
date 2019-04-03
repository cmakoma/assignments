const mongoose = require("mongoose")
const Schema = mongoose.Schema

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    teamMember: {
        type: Array,
        required: true
    }

})

module.exports = mongoose.model("Team", teamSchema)