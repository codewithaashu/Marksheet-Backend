import { Admins } from "../Model/Admins.js";

const CreateAdmin = async (req, res) => {
  try {
    const { username } = req.body;
    const admin = await Admins.findOne({ username });
    if (admin) {
      return res
        .status(401)
        .json({ success: false, message: "Username already exists" });
    }
    await Admins.create(req.body);
    return res
      .status(200)
      .json({ success: true, message: "Admin created successfully." });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
export default CreateAdmin;
