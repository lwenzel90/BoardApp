const db = require('../models');

exports.getBoards = (req, res) => {
  db.Board.find()
    .then((Boards) => {
      res.json(Boards);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createBoard = (req, res) => {
  db.Board.create(req.body)
    .then((newBoard) => {
      res.status(201).json(newBoard);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getBoard = (req, res) => {
  db.Board.findById(req.params.boardId)
    .then((foundBoard) => {
      res.json(foundBoard);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateBoard = (req, res) => {
  db.Board.findOneAndUpdate({ _id: req.params.boardId }, req.body, { new: true })
    .then((Board) => {
      res.json(Board);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteBoard = (req, res) => {
  db.Board.remove({ _id: req.params.boardId })
    .then(() => {
      res.json({ message: 'Item removed' })
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = exports;
