import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

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
              <Button variant="h6" style={{ color: "white" }}>
                Feed
              </Button>
            </Grid>
            <Grid item>
              <Button style={{ color: "white" }}>Sobre</Button>
            </Grid>
            <Grid item>
              <Button style={{ color: "white" }}>Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
