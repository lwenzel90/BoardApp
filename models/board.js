const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    todos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ],
    create_data: {type: Date, default: Date.now}
});
let Board = mongoose.model("Board", boardSchema);
module.exports = Board;