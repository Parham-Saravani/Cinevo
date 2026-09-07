import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    contentID: { type: String, required: true },
    comments: [
      {
        author: String,
        text: String,
        isSpoil: Boolean,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);
const Comment = mongoose.model("comments", commentSchema);
export default Comment;
