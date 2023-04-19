import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/is-authenticated`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.error("Error fetching data: ", error);
      });
  }, [isLoggedIn]);

  return (
    <div style={{ flexGrow: "1", marginBottom: "30px" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Grid container justifyContent="center" spacing={10}>
            <Grid item>
              <Link to="/feed">
                <Button variant="h6" style={{ color: "white", zIndex: 1 }}>
                  Feed
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about">
                <Button style={{ color: "white", zIndex: 1 }}>Sobre</Button>
              </Link>
            </Grid>
            <Grid item>
              {!isLoggedIn ? (
                <Link to="/login">
                  <Button style={{ color: "white", zIndex: 1 }}>Login</Button>
                </Link>
              ) : (
                <Link to="/account">
                  <Button style={{ color: "white", zIndex: 1 }}>Conta</Button>
                </Link>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
