import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define state for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors

  // Handle form submission with basic validation
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    // If there are errors, set them and don't submit the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log({
      username,
      email,
      password
    });

    // Clear the form and errors after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
