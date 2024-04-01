const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please add text value"]
    },
    importance: {
        type: String,
        // required: [true, "Please add text value"]
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema)