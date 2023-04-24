import {
  Menu,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function MenuAccount() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        flexGrow: "1",
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Grid
            container
            justifyContent="center"
            spacing={0}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <Button variant="h6" style={{ color: "white", zIndex: 1 }}>
                Feed
              </Button>
            </Grid>
            <Grid item>
              <Button style={{ color: "white", zIndex: 1 }}>Sobre</Button>
            </Grid>
            <Grid item>
              <Button style={{ color: "white", zIndex: 1 }}>Conta</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default MenuAccount;
