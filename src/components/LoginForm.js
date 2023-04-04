import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/auth/authenticate`, {
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/feed");
          console.log(res);
          localStorage.setItem("token", res.data.token);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }
      );
      console.log(response);
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("link", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      });
      console.log(response);
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "80px",
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
      <Typography
        variant="h10"
        component="h10"
        gutterBottom
        style={{ color: "white", marginBottom: "20px" }}
      >
        Esse é um sistema de um blog, onde usuários podem se cadastrar e criar
        posts.
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
            /* border: "1px solid #1976d2", */
            borderRadius: 4,
            zIndex: 1,

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
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            id="name"
            label="Sobrenome"
            type="text"
            required
            variant="outlined"
            fullWidth
            style={{ marginBottom: "15px" }}
            onChange={(event) => setLastName(event.target.value)}
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
            style={{ marginTop: "20px", zIndex: 1 }}
          >
            Cadastrar
          </Button>
          <Button
            size="small"
            variant="text"
            style={{ marginTop: "10px", fontSize: "0.8rem", zIndex: 1 }}
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
                /* border: `1px solid ${"primary"}`, */
                borderRadius: 4,
                background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
                zIndex: 1,
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
                style={{ marginBottom: "15px", zIndex: 1 }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ zIndex: 1 }}
              >
                Enviar
              </Button>
              <Button
                size="small"
                variant="text"
                style={{ marginTop: "8px", fontSize: "0.8rem", zIndex: 1 }}
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
                /* border: "1px solid #1976d2", */
                borderRadius: 4,
                background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
                zIndex: 1,
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
                style={{
                  marginBottom: "15px",
                  zIndex: 1,
                }}
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
                style={{ zIndex: 1 }}
              >
                Entrar
              </Button>
              <Button
                size="small"
                variant="text"
                style={{ marginTop: "10px", fontSize: "0.8rem", zIndex: 1 }}
                onClick={() => setShowForgotPassword(true)}
                disabled
              >
                Esqueceu a senha?
              </Button>
              <Button
                size="small"
                variant="text"
                style={{
                  marginTop: "theme.spacing(1)",
                  fontSize: "0.8rem",
                  zIndex: 1,
                }}
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
