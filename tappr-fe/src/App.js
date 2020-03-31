import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TAPPR</h1>
        <RegisterForm />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
