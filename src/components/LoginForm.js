import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Nome: ${event.target.name.value}, Email: ${event.target.email.value}, Senha: ${event.target.password.value}`
    );
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ color: "white" }}
      >
        Bem-vindo ao Lorem Ipsum
      </Typography>
      {showRegistrationForm ? (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: 400,
            minWidth: 400,
            marginTop: 16,
            marginBottom: 16,
            padding: 8,
            border: "1px solid #1976d2",
            borderRadius: 4,
            background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
          }}
          onSubmit={handleRegistrationSubmit}
        >
          <TextField
            id="name"
            label="Primeiro nome"
            type="text"
            required
            variant="outlined"
            fullWidth
            style={{ marginBottom: "15px" }}
          />
          <TextField
            id="name"
            label="Sobrenome"
            type="text"
            required
            variant="outlined"
            fullWidth
            style={{ marginBottom: "15px" }}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            required
            variant="outlined"
            fullWidth
            style={{ marginBottom: "15px" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="password"
            label="Senha"
            type="password"
            required
            variant="outlined"
            fullWidth
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Cadastrar
          </Button>
          <Button
            size="small"
            variant="text"
            style={{ marginTop: "10px", fontSize: "0.8rem" }}
            onClick={() => setShowRegistrationForm(false)}
          >
            Voltar
          </Button>
        </form>
      ) : (
        <div>
          {showForgotPassword ? (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: 400,
                minWidth: 400,
                marginTop: 16,
                marginBottom: 16,
                padding: 16,
                border: `1px solid ${"primary"}`,
                borderRadius: 4,
                background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
              }}
              onSubmit={handleForgotPasswordSubmit}
            >
              <TextField
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                style={{ marginBottom: "15px" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                s
              >
                Enviar
              </Button>
              <Button
                size="small"
                variant="text"
                style={{ marginTop: "8px", fontSize: "0.8rem" }}
                onClick={() => setShowForgotPassword(false)}
              >
                Voltar
              </Button>
            </form>
          ) : (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: 400,
                minWidth: 400,
                marginTop: 16,
                marginBottom: 16,
                padding: 8,
                border: "1px solid #1976d2",
                borderRadius: 4,
                background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                id="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                style={{ marginBottom: "15px" }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                id="password"
                label="Senha"
                type="password"
                required
                variant="outlined"
                fullWidth
                style={{ marginBottom: "15px" }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Entrar
              </Button>
              <Button
                size="small"
                variant="text"
                style={{ marginTop: "10px", fontSize: "0.8rem" }}
                onClick={() => setShowForgotPassword(true)}
              >
                Esqueceu a senha?
              </Button>
              <Button
                size="small"
                variant="text"
                style={{ marginTop: "theme.spacing(1)", fontSize: "0.8rem" }}
                onClick={() => setShowRegistrationForm(true)}
              >
                Não possui conta? Cadastre-se
              </Button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginForm;
