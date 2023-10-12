import Comment from "../models/commentModel.js";
export const createComment = async (req, res) => {
    try {
        // Randomly generate a shareid
        console.log(req.body)
        const newComment = new Comment(req.body);
        await newComment.save();

        res.status(200).json({ message: "OK" });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

// get comments
export const getComment = async (req, res) => {
// find comment from postid
    const postid = req.query.postid;
    const items = await Comment.find({post: postid});
    if (!items) {
        return res.status(200).json({ });
    }
    res.status(200).json(items);
  };
  