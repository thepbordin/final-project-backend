import Post from "../models/postModel.js";

/** @type {import("express").RequestHandler} */

export const createPost = async (req, res) => {
    try {
        // Randomly generate a shareid
        const newPost = new Post(req.body);
        await newPost.save();

        res.status(200).json({ message: "OK" });
    } catch (err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

/** @type {import("express").RequestHandler} */
export const getPosts = async (req, res) => {
    const roomid = req.query.roomid;
    
    var sort;
    if (req.query.sortby == "lastest") {
        sort = { created_at: -1 };
    } else if (req.query.sortby == "oldest") {
        sort = { created_at: 1 };
    } else if (req.query.sortby == "score") {
        sort = { score: -1 };
    } else {
        sort = { created_at: -1 };
    }

    var items;
    if (roomid) {
        items = await Post.find({ room: roomid }).sort(sort);
    } else {
        items = await Post.find().sort(sort);
    }

    res.status(200).json(items);
};





