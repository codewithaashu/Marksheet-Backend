import Messages from "../Model/Message.js";

const SendMessage = async (req, res) => {
  try {
    const message = await Messages.create(req.body);
    return res.status(200).json({
      message: "Successfully sending the message",
      success: true,
      data: message,
    });
  } catch (err) {
    return res.status(200).json({
      message: "Error sending the message",
      success: false,
    });
  }
};
export default SendMessage;
