import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
        const response = await fetch("http://localhost:8000/api/v1/signup", {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        });
    }
    catch(error) {
        console.error("Error posting data to server", error);
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
    </div>
  );
}

export default Signup;
