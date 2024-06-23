import User from '../models/user.models.js';
import generateToken from '../utils/generateToken.js';


const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const userExists = await User.findOne({
      username: username,
      password: password,
    });
    if (userExists) {
      const token = generateToken(userExists._id);
      return res.status(202).json({ message: "Login successful", token });

    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default login;