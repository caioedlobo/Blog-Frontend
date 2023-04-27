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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuAccount() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleQuit = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmQuit = () => {
    localStorage.removeItem("token");
    navigate("/login");

    setConfirmDialogOpen(false);
  };

  const handleCancelQuit = () => {
    setConfirmDialogOpen(false);
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
                <Button
                  style={{ color: "black", zIndex: 1 }}
                  onClick={handleQuit}
                >
                  Sair
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CardContent>
      <Dialog open={confirmDialogOpen} onClose={handleCancelQuit}>
        <DialogTitle>Você deseja realmente sair do sistema?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Ao sair do sistema, você perderá todos os dados não salvos. Tem
            certeza de que deseja sair?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelQuit}>Não</Button>
          <Button onClick={handleConfirmQuit}>Sim</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default MenuAccount;
