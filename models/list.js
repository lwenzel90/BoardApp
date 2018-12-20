const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
  create_data: { type: Date, default: Date.now }
});
const List = mongoose.model('List', listSchema);
module.exports = List;