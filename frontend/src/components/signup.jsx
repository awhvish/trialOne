import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  var [flag, setFlag] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
        const response = await axios.post('http://localhost:8000/api/v1/signup', formData);
        console.log('Server response:', response.data);
    }
    catch(error){
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
      <h1>Signup</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Enter full name"
          name="fullName"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Enter password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {flag && <p>Username or email already exists! </p> }
    </div>
  );
}

export default Signup;
