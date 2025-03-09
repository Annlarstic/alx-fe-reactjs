import React, { useState } from "react";

const RegistrationForm = () => {
  // State for input values
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!username) newErrors.username = "Username is required";

    setErrors(newErrors);

  
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      <br />
      
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      <br />
      
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      <br />
      
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;