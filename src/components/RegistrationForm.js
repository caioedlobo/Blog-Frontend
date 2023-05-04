import { React, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("success");

  const navigate = useNavigate();

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    setStatus("info");
    setMessage("Realizando o cadastro...");
    setOpenSnackbar(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }
      )
      setStatus("success");
      setMessage("Cadastro realizado com sucesso");
      setOpenSnackbar(true);
      console.log(response);
      localStorage.setItem("token", response.data.token);

      navigate("/feed");
    } catch (error) {
      setStatus("error");
      setMessage("Erro ao realizar cadastro");
      setOpenSnackbar(true);
      console.error(error);
    }
  };

  return (
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={status} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
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
        onClick={props.onCloseRegistrationForm}
      >
        Voltar
      </Button>
    </form>
  );
};

export default RegistrationForm;
