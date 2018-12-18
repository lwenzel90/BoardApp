let express = require("express");
let router = express.Router();
let db = require("../models");
let helpers = require("../helpers/boards");

router.route("/")
    .get(helpers.getBoards)
    .post(helpers.createBoard);

router.route("/:boardId")
    .get(helpers.getBoard)
    .put(helpers.updateBoard)
    .delete(helpers.deleteBoard)


module.exports = router;