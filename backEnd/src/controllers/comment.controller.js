import Comment from "../models/comment.model.js";
import Movie from "../models/movie.model.js";
import Serie from "../models/series.model.js";

const registerNewComment = async (req, res) => {
  const date = req.body;
  console.log(data);
  
};
const takeContentComments = async (req, res) => {
  const contentslug = req.params.slug;
  try {
    const currentContentID =
      (await Movie.findOne({ slug: contentslug }, { _id: true })) ||
      (await Serie.findOne({ slug: contentslug }, { _id: true }));
    const comments = Comment.findOne({ contentID: currentContentID });
    res.json(comments);
  } catch (error) {
    res.json({ message: "NO_COMMENT_FOUND" });
  }
};
export { registerNewComment, takeContentComments };
