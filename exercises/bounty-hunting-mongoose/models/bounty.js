const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountAmount: Number,
    type: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
})

module.exports = mongoose.model("bounty", bountySchema)