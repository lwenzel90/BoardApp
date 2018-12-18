let mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost:27017/board-app", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
module.exports.Board = require("./board");