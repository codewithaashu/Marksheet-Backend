import mongoose from "mongoose";
const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    minLength: 10,
  },
  message: {
    type: String,
    required: true,
  },
});
const Messages = mongoose.model("Messages", MessageSchema);
export default Messages;
