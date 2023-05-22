import React, { useState } from "react";
import {
  Card,
  Button,
  CardContent,
  Typography,
  Box,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardFeed(props) {
  const { id, title, text, name, date, isAuthor, searchQuery } = props;

  const [showFullText, setShowFullText] = useState(false);

  const filteredDate = formatarData(date);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("success");

  const navigate = useNavigate();

  function formatarData(dateString) {
    const date = new Date(dateString);
    const hora = date.getHours().toString().padStart(2, "0");
    const minutos = date.getMinutes().toString().padStart(2, "0");
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const ano = date.getFullYear().toString();
    return `${hora}:${minutos} - ${dia}/${mes}/${ano}`;
  }

  const excludeSuccess = () => {
    
    setStatus("success");
    setMessage("Post excluído com sucesso!")
    setOpenSnackbar(true);
  }

  const excludeError = (error) => {
    setStatus("error");
    setMessage("Erro ao deletar post. Logue novamente na sua conta ou tente mais tarde.");
    setOpenSnackbar(true);
  }
  

  const handleExclude = () => {
    setConfirmDialogOpen(true);
  };

  const handleConfirmExclude = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((response) => {
      console.log(response);
      window.location.reload();
      excludeSuccess();
    })
    .catch((error) => {
      console.log(error);
      excludeError(error);
    })

    setConfirmDialogOpen(false);
  };
  const handleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const handleCancelExclude = () => {
    setConfirmDialogOpen(false);
  };

  const maxSizeText = 200;
  let trimmedText =
    text.length > maxSizeText ? text.slice(0, maxSizeText) + "..." : text;

  const highlightQuery = (str, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return str.replace(regex, `<mark>$1</mark>`);
  };

  const highlightedTitle = highlightQuery(title, searchQuery);
  const highlightedText = highlightQuery(text, searchQuery);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
      }}
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
      <Card
        elevation={6}
        style={{
          width: "100%",
          minWidth: 200,
          maxWidth: 525,
        }}
      >
        <CardContent>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h2"
                style={{ marginBottom: "10px" }}
                dangerouslySetInnerHTML={{ __html: highlightedTitle }}
              />
              <Typography
                style={{
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: "100%",
                }}
                dangerouslySetInnerHTML={{
                  __html: showFullText ? highlightedText : trimmedText,
                }}
              />
              {text.length > maxSizeText && (
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleShowFullText}
                  style={{
                    maxWidth: 140,
                    margin: 10,
                    alignSelf: "end",
                  }}
                >
                  {showFullText ? "Esconder" : "Mostrar mais"}
                </Button>
              )}
            </Box>
            <Box textAlign={"right"} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            
              <Typography color="textSecondary" variant="body2" component="p">
                {filteredDate + " ● " + name}
              </Typography>
              { isAuthor ? <Button onClick={handleExclude}>
              <DeleteIcon sx={{ color: 'red' }} />
              </Button>
: <></>}

              
            </Box>
          </Box>
        </CardContent>
        <Dialog open={confirmDialogOpen} onClose={handleCancelExclude}>
        <DialogTitle>Você deseja realmente excluir o post?</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Ao excluir o post ele será removido do banco de dados permanentemente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelExclude}>Não</Button>
          <Button onClick={handleConfirmExclude}>Sim</Button>
        </DialogActions>
      </Dialog>
      </Card>
    </Container>
  );
}

export default CardFeed;
