const Comment = require("../models/commentModel");
const asyncHandler = require("express-async-handler");
// getting all comments from the database
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find(req.body);
  res.status(200).json(comments);
});
// adding a comment to the database
const addComment = asyncHandler(async (req, res) => {
  const comment = await Comment.create(req.body);
  res
    .status(200)
    .json({ message: "Comment added successfully", data: comment });
});

module.exports = { getComments, addComment };
