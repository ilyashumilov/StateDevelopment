import React, { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import StateDevelopmentComponent from './components/StateDevelopmentComponent';

const App = () => {
  const [currentState, setCurrentState] = useState('Login');

  console.log(currentState)
  console.log(LoginComponent)

  const handleLogin = () => {
    setCurrentState('Stats');
  };

  const handleLogout = () => {
    setCurrentState('Login');
  };

  const goToOverview = () => {
    setCurrentState('Overview');
  };

  return (
    <div>
      {currentState === 'Login' && <LoginComponent onLogin={handleLogin}/>}
      {currentState === 'Stats' && <StateDevelopmentComponent />}
    </div>
  );
};

export default App;
