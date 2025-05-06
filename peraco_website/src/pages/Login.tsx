// src/pages/LoginPage.jsx
import React from 'react';
import LoginForm from '../components/LoginForm';


const Login = () => {
  const handleLogin = (credentials: { email: string; password: string }) => {

    console.log('Iniciar sesión con:', credentials);
    // Aquí puedes llamar a la API y redirigir al dashboard
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
