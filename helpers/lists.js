const db = require('../models');

exports.getLists = (req, res) => {
  db.List.find()
    .then((Lists) => {
      res.json(Lists);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createList = (req, res) => {
  db.List.create(req.body)
    .then((newList) => {
      res.status(201).json(newList);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getList = (req, res) => {
  db.List.findById(req.params.listId)
    .then((foundList) => {
      res.json(foundList);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.updateList = (req, res) => {
  db.List.findOneAndUpdate({ _id: req.params.listId }, req.body, { new: true })
    .then((List) => {
      res.json(List);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteList = (req, res) => {
  db.List.remove({ _id: req.params.listId })
    .then(() => {
      res.json({ message: 'Item removed' });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = exports;
