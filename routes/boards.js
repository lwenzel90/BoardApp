const express = require('express');
const router = express.Router();
const helpers = require('../helpers/boards');

router.route('/')
  .get(helpers.getBoards)
  .post(helpers.createBoard);

router.route('/:boardId')
  .get(helpers.getBoard)
  .put(helpers.updateBoard)
  .delete(helpers.deleteBoard);


module.exports = router;
