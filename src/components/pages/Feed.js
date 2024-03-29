import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import SearchBar from "../SearchBar/SearchBar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Feed = (props) => {
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setBody] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("success");
  const [accountIdLoggedIn, setAccountIdLoggedIn] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/posts/all-posts/search?query=${searchQuery}`
        );
        setFilteredPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [searchQuery]);

  useEffect(() => {
    const fetchAccountId = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/accounts/account-id`,
          {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          }
        );
        setAccountIdLoggedIn(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchAccountId();
  }, []);




  const handleSearchQueryChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/posts`,
          {
            title: title,
            body: text,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then(() => {
          handleCloseForm();
          window.location.reload();
          setOpenSnackbar(true);
        });
    } catch (errors) {
      console.log(errors);
      setStatus("error");
      if (errors.response.status === "400") {
        setMessages("Erro: " + errors.response.data.errors.join(", "));
      }
      setMessages(
        "Erro: Verifique se está logado ou tente novamente mais tarde."
      );
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={status} sx={{ width: "100%" }}>
          {messages}
        </Alert>
      </Snackbar>
      <Navbar isLoggedIn={props.isLoggedIn}/>
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />

      {filteredPosts.map((post, index) => (
        <CardFeed
          key={index}
          id={post.id}
          title={post.title}
          text={post.body}
          name={post.account.firstName + " " + post.account.lastName}
          date={post.createdAt}
          isAuthor={post.account.id === accountIdLoggedIn ? true : false }
        />
      ))}

      <Fab
        color="white"
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
        }}
        onClick={handleOpenForm}
        disabled={!localStorage.getItem("token")}
      >
        <AddIcon />
      </Fab>

      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Novo Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            onChange={handleTitleChange}
          />
          <TextField
            margin="dense"
            id="text"
            label="Corpo do Texto"
            type="text"
            rows={5}
            fullWidth
            multiline
            onChange={handleBodyChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancelar</Button>
          <Button onClick={handleSave} disabled={!title || !text}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Feed;
