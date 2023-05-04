import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import MenuAccount from "../MenuAccount";
import axios from "axios";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

const Account = (props) => {
  const [posts, setPosts] = useState([]);
  const [accountId, setAccountId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [menuState, setMenuState] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("success");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/accounts/account-id`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        setAccountId(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/all-posts/${accountId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accountId]);

  const submitChangeName = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/accounts/update-name`,
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        setStatus("success");
        setMessage("Acão realizada com sucesso!");
        setOpenSnackbar(true);
        console.log(response.data);
      })
      .catch((errors) => {
        setStatus("error");
        console.log(typeof errors.response.status)
        if (errors.response.status === 400) {
          console.log(errors.response.data.errors.join(", "));
          setMessage("Erro: " + errors.response.data.errors.join(", "));
        }
        else{
          setMessage(
            "Erro: Verifique se está logado ou tente novamente mais tarde."
          );
        } 
        setOpenSnackbar(true);
        console.log(errors);
      });
  };

  const submitChangePassword = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/accounts/update-password`,
        {
          password: newPassword
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((response) => {
        setStatus("success");
        setMessage("Acão realizada com sucesso!");
        setOpenSnackbar(true);
        console.log(response.data);
      })
      .catch((errors) => {
        setStatus("error");
        //setMessage("Erro ao realizar acão: " + errors.response.data.errors);

        if (errors.response.status === 400) {
          setMessage("Erro: " + errors.response.data.errors.join(", "));
        }
        else{
          setMessage(
            "Erro: Verifique se está logado ou tente novamente mais tarde."
          );
        }
        setOpenSnackbar(true);
        console.log(errors);
      });
  };

  return (
    <div>
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
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <MenuAccount
          handleChangeStateName={() => setMenuState("1")}
          handleChangeStateSecurity={() => setMenuState("2")}
          handleChangeStatePosts={() => setMenuState("3")}
        />

        {menuState === "1" ? (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              width: "525px",
              maxWidth: "525px",
              marginTop: "20px",
            }}
            elevation={3}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "360px",
                  maxWidth: "360px",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" style={{ marginBottom: "20px" }}>
                  Digite o nome que deseja alterar
                </Typography>
                <TextField
                  label="Primeiro nome"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{
                    marginBottom: "20px",
                    width: "350px",
                    maxWidth: "350px",
                  }}
                />
                <TextField
                  label="Último nome"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{
                    marginBottom: "20px",
                    width: "350px",
                    maxWidth: "350px",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "200px" }}
                  onClick={submitChangeName}
                >
                  Salvar
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : menuState === "2" ? (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              width: "525px",
              maxWidth: "525px",
              marginTop: "20px",
            }}
            elevation={3}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "360px",
                  maxWidth: "360px",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" style={{ marginBottom: "20px" }}>
                  Digite sua nova senha
                </Typography>
                <TextField
                  label="Nova senha"
                  variant="outlined"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{
                    marginBottom: "20px",
                    width: "350px",
                    maxWidth: "350px",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "200px" }}
                  onClick={submitChangePassword}
                >
                  Salvar
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div style={{ width: "100%" }}>
            {posts.map((post) => (
              <CardFeed
                key={post.id}
                title={post.title}
                text={post.body}
                name={post.account.firstName + " " + post.account.lastName}
                date={post.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
