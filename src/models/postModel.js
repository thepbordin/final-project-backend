import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'rooms', 
    required: true,
  },
  attachments: [{
    type: String 
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    default: 0,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comments',
  }],
});

const Post = mongoose.model('Post', postSchema);

export default Post;
