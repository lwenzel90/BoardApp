const express = require('express');

const router = express.Router();
const helpers = require('../helpers/lists');

router.route('/')
  .get(helpers.getLists)
  .post(helpers.createList);

router.route('/:listId')
  .get(helpers.getList)
  .put(helpers.updateList)
  .delete(helpers.deleteList);


module.exports = router;
