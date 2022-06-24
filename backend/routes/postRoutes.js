const express = require("express");
const router = express.Router();
const {
  getAllPosts,
  setPosts,
} = require("../controllers/postController");

router.get("/", getAllPosts).post("/", setPosts);

module.exports = router;
