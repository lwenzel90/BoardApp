let db = require("../models");

exports.getBoards = function(req, res){
    db.Board.find()
    .then(function(Boards){
        res.json(Boards);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createBoard = function(req, res){
    db.Board.create(req.body)
    .then(function(newBoard){
        res.status(201).json(newBoard);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getBoard = function(req, res){
    db.Board.findById(req.params.boardId)
    .then(function(foundBoard){
        res.json(foundBoard)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateBoard = function(req, res){
    db.Board.findOneAndUpdate({_id: req.params.boardId}, req.body, {new: true})
    .then(function(Board){
        res.json(Board);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteBoard = function(req, res){
    db.Board.remove({_id: req.params.boardId})
    .then(function(){
        res.json({message: "Item removed"})
    })
    .catch(function(){
        res.send(err);
    })
}

module.exports = exports;