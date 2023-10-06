import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shareid: {
    type: String,
    required: true,
    unique: true
  },
  // created_by: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User', 
  //   required: true,
  // },
  created_at: {
    type: Date,
    default: Date.now,
  },
  

  // Add other room-related fields here if needed
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
