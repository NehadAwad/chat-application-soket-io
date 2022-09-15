const express = require("express");
const router = express.Router();
const { getUsers }= require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");


router.get("/", getUsers);

module.exports = router;