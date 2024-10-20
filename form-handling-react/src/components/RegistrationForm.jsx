import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define state for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, for now, we will just log the values
    console.log({
      username,
      email,
      password
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} // Controlled input
          onChange={(e) => setUsername(e.target.value)} // Update state
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update state
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password} // Controlled input
          onChange={(e) => setPassword(e.target.value)} // Update state
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
