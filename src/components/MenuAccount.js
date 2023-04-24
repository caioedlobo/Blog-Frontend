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
    <Card
      style={{
        /* flexGrow: "1", */
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        maxWidth: "490px",
        /* background: "green", */
        maxHeight: "70px",
        marginBottom: "30px",
      }}
      elevation={3}
    >
      <CardContent>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Grid
              container
              justifyContent="center"
              spacing={0}
              style={{
                display: "flex",
                flexDirection: "row",
                /* background: "green", */
                /* maxWidth: "120px", */
                alignItems: "center",
              }}
            >
              <Grid item>
                <Button style={{ color: "black", zIndex: 1 }}>
                  Alterar nome
                </Button>
              </Grid>
              <Grid item>
                <Button style={{ color: "black", zIndex: 1 }}>Seguranca</Button>
              </Grid>
              <Grid item>
                <Button style={{ color: "black", zIndex: 1 }}>
                  Meus posts
                </Button>
              </Grid>
              <Grid item>
                <Button style={{ color: "black", zIndex: 1 }}>Sair</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CardContent>
    </Card>
  );
}

export default MenuAccount;
