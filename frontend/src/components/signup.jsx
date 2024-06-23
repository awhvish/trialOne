import { useState } from "react";
import axios from "axios";
import "./css/signup.css";
import Navbar from "./navbar";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  var [flag, setFlag] = useState(0);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "/api/v1/signup",
        formData
      );
      console.log("Server response:", response.data);
      setFlag(2);
    } catch (error) {
      console.error("Error posting data to server:", error.response.data.error);
      setFlag(1);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1>Signup</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Enter full name"
          name="fullName"
          className="signup-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          className="signup-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          className="signup-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          className="signup-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <button className="signup-btn" type="submit">
          Sign Up
        </button>
      </form>

      {flag==2?<h3>User created!<br></br> 
      <a href="/login">Login to continue</a></h3>:""}

      {flag==1?<h3>Username or password already exists</h3>:""}
    </div>
  );
}

export default Signup;
