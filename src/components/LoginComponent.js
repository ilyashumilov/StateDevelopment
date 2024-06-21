import React, { useState } from 'react';
import '../styles/LoginComponent.css'; // Import CSS for styling

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(event.target);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        console.log("hello handle");
        var love = parseInt(localStorage.getItem('love'));
        love += 1;

        const label = document.getElementById('love');
        label.textContent = localStorage.getItem('love');
        label.textContent = love;
        localStorage.setItem('love', love);
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
        onLogin()
      } catch (error) {
        console.error('Error:', error.message);
      }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Проработка состояния</h2>
      <form onSubmit={handleSubmit}>
       <input type="text" name="argument1" value="value1"></input>
        <button type="submit" className="btn btn-primary" value="love">Любовь к себе</button>
        <button type="submit" className="btn btn-primary" value="happy">Радость</button>
        <button type="submit" className="btn btn-primary" value="balance">Баланс</button>
      </form>
      <h2>Love:</h2><h2 id="love">Любвь состояния</h2>
      <h2>Happy:</h2><h2 id="happy">Любвь состояния</h2>
      <h2>Balance:</h2><h2 id="balance">Любвь состояния</h2>
      <script>

      </script>
    </div>
  );
};

export default LoginComponent;
