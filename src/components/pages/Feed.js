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

/* const posts = [
  {
    title: "Título do primeiro post",
    text: "Texto do primeiro post",
    name: "Nome do autor 1",
  },
  {
    title: "Título do segundo post",
    text: "Texto do segundo post",
    name: "Nome do autor 2",
  },
  {
    title: "Título do terceiro post",
    text: "Texto do terceiro post",
    name: "Nome do autor 3",
  },
]; */

const Feed = () => {
  // eslint-disable-next-line
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setBody] = useState("");
  console.log(filteredPosts);
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
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearchQueryChange={handleSearchQueryChange} />

      {filteredPosts.map((post, index) => (
        <CardFeed
          key={index}
          title={post.title}
          text={post.body}
          name={post.account.firstName + " " + post.account.lastName}
          date={post.createdAt}
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
          <Button onClick={handleSave}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Feed;
