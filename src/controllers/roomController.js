import Room from "../models/roomModel.js";

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
/** @type {import("express").RequestHandler} */
export const createRoom = async (req, res) => {
  try {
    // Randomly generate a shareid
    const shareid = generateRandomString(8);
    req.body.shareid = shareid;

    const newRoom = new Room(req.body);
    await newRoom.save();

    res.status(200).json({ roomid:  shareid});
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

/** @type {import("express").RequestHandler} */
export const getRoom = async (req, res) => {
  const items = await Room.find();

  res.status(200).json(items);
};





