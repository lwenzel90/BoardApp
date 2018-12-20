const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
    },
  ],
  create_data: { type: Date, default: Date.now },
});
const Board = mongoose.model('Board', boardSchema);
module.exports = Board;
