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
// deleting a comment from the database
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  //   const comment = await Comment.findById(req.params.id);
  //   await comment.remove();
  res.status(200).json({ message: "Comment deleted successfully" });
});
// updating a comment in the database
const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res
    .status(200)
    .json({ message: "Comment updated successfully", data: comment });
});

module.exports = { getComments, addComment, updateComment, deleteComment };
