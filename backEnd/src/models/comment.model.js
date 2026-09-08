import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    contentID: { type: mongoose.Schema.Types.ObjectId, required: true },
    comments: [
      {
        author: String,
        text: String,
        isSpoil: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);
const Comment = mongoose.model("comments", commentSchema);
export default Comment;
