const validateSignupInput = (req, res, next) => {
    const { fullName, username, email, password } = req.body;
    if (!fullName || !username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Add more validation logic as needed
    next();
  };

  export default validateSignupInput;