// src/components/LoginForm.jsx
import React, { useState } from 'react';

type Props = {
  onLogin: (credentials: { email: string; password: string }) => void;
};

const LoginForm: React.FC<Props> = ({ onLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Contraseña</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
