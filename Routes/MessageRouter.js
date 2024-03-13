import express from "express";
import SendMessage from "../Controller/SendMessage.js";
const MessageRouter = express.Router();
MessageRouter.route("/").post(SendMessage);
export default MessageRouter;
