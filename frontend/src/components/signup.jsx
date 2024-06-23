import { useState, useEffect } from "react";
import axios from "axios";
import "./css/signup.css";
import Navbar from "./navbar";
import { useAuth } from "./utils/authContext.jsx";
import { useNavigate } from "react-router-dom";
import validateForm from "./utils/validateForm.jsx";
import Footer from "./footer.jsx";

function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated, checkAuth } = useAuth();
  const [caution, setCaution] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, checkAuth]);

  async function onSubmit(event) {
    event.preventDefault();
    const validationMessage = validateForm(formData);
    if (validationMessage) {
      setCaution(validationMessage);
      return;
    }
    try {
      const response = await axios.post("/api/v1/signup", formData);
      console.log("Server response:", response.data);
      setCaution((`User created! Login to continue`));
    } catch (error) {
      console.error("Error posting data to server:", error.response.data.error);
      setCaution(`User created! Login to continue.`);    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <Navbar />
      <h1>Signup</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter full name"
          name="fullName"
          className="signup-txt"
          onChange={handleChange}
          value={formData.fullName}
        />
        <br />
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          className="signup-txt"
          onChange={handleChange}
          value={formData.username}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="signup-txt"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          className="signup-txt"
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <button className="signup-btn" type="submit">
          Sign Up
        </button>
      </form>
      <h3>{caution}</h3>
      <Footer></Footer>
    </div>
  );
}

export default Signup;
