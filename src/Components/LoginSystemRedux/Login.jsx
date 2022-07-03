import React, { useState } from "react";

const Login = () => {
  const [value, setvalue] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = value;

  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  return (
    <div className="login">
      <form className="login_form">
        <h1> Login Form</h1>
        <input
          onChange={(e) => handleChange(e)}
          type="name"
          placeholder="Name"
          name="name"
          value={name}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
        />
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
              />
              <button type="submit"></button>
      </form>
    </div>
  );
};

export default Login;
