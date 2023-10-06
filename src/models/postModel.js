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
    type: String // Array of strings representing image URLs or file paths
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    default: 0,
  },
  
  
  // Add other room-related fields here if needed
});

const Post = mongoose.model('Post', postSchema);

export default Post;
