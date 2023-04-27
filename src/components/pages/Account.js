import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import MenuAccount from "../MenuAccount";
import axios from "axios";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const Account = (props) => {
  const [posts, setPosts] = useState([]);
  const [accountId, setAccountId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [menuState, setMenuState] = useState("3");
  console.log(menuState);

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

  return (
    <div>
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
              >
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>

        {posts.map((post) => (
          <CardFeed
            key={post.id}
            title={post.title}
            text={post.body}
            name={post.account.firstName + " " + post.account.lastName}
            date={post.createdAt}
          />
        ))}
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
              >
                Salvar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;
