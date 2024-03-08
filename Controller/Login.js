import { Admins } from "../Model/Admins.js";
const Login = async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const user = await Admins.findOne({ username, userType });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid crediantial details.",
      });
    }
    const comparePassword = password === user.password;
    if (!comparePassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid crediantial details.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Login sucessful",
      data: { username, userType, _id: user._id },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export default Login;
