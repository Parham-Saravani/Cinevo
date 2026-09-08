import Comment from "../models/comment.model.js";
import Movie from "../models/movie.model.js";
import Serie from "../models/series.model.js";
import User from "../models/user.model.js";
import { decompressToken } from "../utilities/token.js";

const registerNewComment = async (req, res) => {
  const { slug, message, isSpoil, token } = req.body;

  if (slug && message && token) {
    const userName = await takeAuthorUserName(token);
    console.log(userName);
    const newComment = {
      author: userName,
      text: message,
    };
    if (isSpoil) {
      newComment.isSpoil = true;
    }
    const contentID =
      (await Movie.findOne({ slug: slug }, { _id: true })) ||
      (await Serie.findOne({ slug: slug }, { _id: true }));

    try {
      const isAvailable = await Comment.findOne({ contentID: contentID });
      if (isAvailable) {
        await Comment.updateOne(
          { contentID: contentID },
          { $push: { comments: newComment } },
        );
      } else {
        await Comment.create({ contentID: contentID, comments: newComment });
      }
      res.status(201).json({ message: "MESSAGE_SUBMITED" });
    } catch (error) {
      res.status(404).json({ message });
    }
  } else {
    res.status(400).json({ message: "NOT_VALID_DATA" });
  }
};

const takeAuthorUserName = async (token) => {
  const userID = decompressToken(token);
  const userData = await User.findOne({ _id: userID });
  return userData.username;
};

const takeContentComments = async (req, res) => {
  const contentslug = req.params.slug;
  try {
    const currentContentID =
      (await Movie.findOne({ slug: contentslug }, { _id: true })) ||
      (await Serie.findOne({ slug: contentslug }, { _id: true }));

    const comments = await Comment.findOne(
      { contentID: currentContentID._id },
      { comments: true, _id: false },
    );

    res.json(comments);
  } catch (error) {
    res.json({ message: "NO_COMMENT_FOUND" });
  }
};
export { registerNewComment, takeContentComments };
