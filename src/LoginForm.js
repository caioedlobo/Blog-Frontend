import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForgotPasswordClick = () => {
    // implementar ação para recuperar senha
  };

  const handleRegisterClick = () => {
    // implementar ação para registrar novo usuário
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // implementar ação para realizar login
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
      <div>
        <button type="button" onClick={handleForgotPasswordClick}>
          Esqueceu a senha?
        </button>
      </div>
      <div>
        <button type="button" onClick={handleRegisterClick}>
          Registrar-se
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
