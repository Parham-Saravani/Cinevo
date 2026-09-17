import Comment from "../models/comment.model.js";
import Movie from "../models/movie.model.js";
import Serie from "../models/series.model.js";
import User from "../models/user.model.js";
import { decompressToken } from "../utilities/token.js";

const registerNewComment = async (req, res) => {
  const { slug, message, isSpoil, token } = req.body;
  let userName = null;
  if (slug && message && token) {
    try {
      userName = await takeAuthorUserName(token);
    } catch (error) {
      return res.json({ message: "USER_NOT_FOUND" });
    }
    const newComment = {
      author: userName,
      text: message,
    };
    if (isSpoil) {
      newComment.isSpoil = true;
    }
    const contentID =
      (await Movie.findOne({ slug: slug }, { _id: true, title: true })) ||
      (await Serie.findOne({ slug: slug }, { _id: true, title: true }));

    try {
      const isAvailable = await Comment.findOne({ contentID: contentID });
      if (isAvailable) {
        await Comment.updateOne(
          { contentID: contentID._id },

          { $push: { comments: newComment } },
        );
      } else {
        await Comment.create({
          contentID: contentID._id,
          contentName: contentID.title,
          comments: newComment,
        });
      }
      res.status(201).json({ message: "MESSAGE_SUBMITED" });
    } catch (error) {
      res.status(404).json({ message: "SOMETHING_HAPPEND", error: error });
    }
  } else {
    res.status(400).json({ message: "NOT_VALID_DATA" });
  }
};

const takeAuthorUserName = async (token) => {
  const userID = decompressToken(token);
  const userData = await User.findOne({ _id: userID });
  if (!userData) {
    throw Error();
  }
  return userData?.username;
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
    if (comments) {
      res.json(comments);
    } else {
      throw Error();
    }
  } catch (error) {
    res.json({ message: "NO_COMMENT_FOUND" });
  }
};

const takeAllCommnets = async (req, res) => {
  const data = await Comment.find(
    {},
    { contentName: true, comments: true, _id: false },
  );

  const customData = data.reduce((obj, current) => {
    const title = current.contentName;
    const newFormatedComments = current.comments.map((item) => {
      return {
        author: item.author,
        text: item.text,
        isSpoil: item.isSpoil,
        createdAt: item.createdAt,
        _id: item._id,
        title,
      };
    });

    return [...obj, ...newFormatedComments];
  }, []);

  res.json(customData);
};
export { registerNewComment, takeContentComments, takeAllCommnets };
