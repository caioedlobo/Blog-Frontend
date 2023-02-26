import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Grid container justifyContent="center" spacing={10}>
            <Grid item>
              <Link to="/feed">
                <Button variant="h6" style={{ color: "white" }}>
                  Feed
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about">
                <Button style={{ color: "white" }}>Sobre</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login">
                <Button style={{ color: "white" }}>Login</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
