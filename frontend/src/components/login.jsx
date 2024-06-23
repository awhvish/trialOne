import { useState } from "react";
import axios from "axios";
import "./css/login.css";
import Navbar from "./navbar";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  var [flag, setFlag] = useState(false);

  async function onSubmit(e) {
    e.preventDefault(); 
    console.log(formData);
    try {
        const response = await axios.post(
          "/api/v1/login",
          formData
        );
        if (response.status === 202) {
          console.log("Server response:", response.data);
          const token = response.data.token;
          setFlag(false);
          try {
            localStorage.setItem("token", token);
            window.location.href = "/play";
            console.log("Token saved to local storage");
          }
          catch (error) {
            console.error("Error saving token:", error);
            setFlag(true);
          }
        }
        else {
          console.log("Server response:", response.data.error);
          setFlag(true);
        }
      }
    catch (error) {
        console.error("Error posting data to server:", error.response.data.error);
        setFlag(true);
      }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Enter username or email"
          name="username"
          className="login-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter password"
          name="password"
          className="login-txt"
          onChange={(e) => handleChange(e)}
        />
        <br></br>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>

      {flag && <p>Invalid username or password! </p>}
    </div>
  );
}

export default Login;
