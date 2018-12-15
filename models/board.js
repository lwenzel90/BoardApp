const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    todos: {type: Boolean, default: false},
    create_data: {type: Date, default: Date.now}
});
let Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;