import React, { useState } from 'react';
import '../styles/LoginComponent.css'; // Import CSS for styling

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_HOST}:${process.env.REACT_APP_BACKEND_API_PORT}/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('tokenType', data.token_type);
        localStorage.setItem('love', 0);
        onLogin()
        setUsername('');
        setPassword('');
      } catch (error) {
        console.error('Error:', error.message);
      }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
