const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

// get all posts from mongoDb
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
});
const setPosts = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);
  res.status(200).json({ post });
});

module.exports = { getAllPosts, setPosts };
