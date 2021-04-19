const mongoose = require("mongoose")
const Schema = mongoose.Schema

const wagerSchema = new Schema({
    customer: {
        type: String,
        required: true
    },
    bet: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("Wager", wagerSchema)