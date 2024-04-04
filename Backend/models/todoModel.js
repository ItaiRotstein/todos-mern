const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is empty"]
    },
    id: {
        type: String,
        required: [true, "Id is not existing, must have id"]
    },
    completed: {
        type: Boolean
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema)