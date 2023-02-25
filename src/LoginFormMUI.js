import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    marginTop: "40px",
    /* background: "linear-gradient(45deg, #141e30 10%, #243b55 90%)", */
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    background: "linear-gradient(45deg, #bdc3c7 10%, #ffff 90%)",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  forgotPassword: {
    marginTop: theme.spacing(1),
    fontSize: "0.8rem",
  },
}));

function LoginFormMUI() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  const handleForgotPasswordSubmit = () => {
    setShowForgotPassword(true);
  };

  const handleBackClick = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bem-vindo ao Lorem Ipsum
      </Typography>
      {showForgotPassword ? (
        <form className={classes.form} onSubmit={handleForgotPasswordSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            required
            variant="outlined"
            fullWidth
            className={classes.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            Enviar
          </Button>
          <Button
            size="small"
            variant="text"
            className={classes.forgotPassword}
            onClick={() => setShowForgotPassword(false)}
          >
            Voltar
          </Button>
        </form>
      ) : (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Email"
            type="email"
            required
            variant="outlined"
            fullWidth
            className={classes.input}
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
            className={classes.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            Entrar
          </Button>
          <Button
            size="small"
            variant="text"
            className={classes.forgotPassword}
            onClick={() => setShowForgotPassword(true)}
          >
            Esqueceu a senha?
          </Button>
          <Button
            size="small"
            variant="text"
            className={classes.forgotPassword}
          >
            Não possui conta? Cadastre-se
          </Button>
        </form>
      )}
    </div>
  );
}
export default LoginFormMUI;
