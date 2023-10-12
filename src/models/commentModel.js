import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    score: {
        type: Number,
        default: 0,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
