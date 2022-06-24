const express = require("express");
const {
  getComments,
  addComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentController");
const router = express.Router();

router.get("/", getComments).post("/", addComment);
router.put("/:id", updateComment).delete("/:id", deleteComment);

module.exports = router;
