const express = require("express");
const { getComments, addComment } = require("../controllers/commentController");
const router = express.Router();

router.get("/", getComments).post("/", addComment);

module.exports = router;
