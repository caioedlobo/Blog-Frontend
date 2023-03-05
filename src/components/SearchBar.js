import React from "react";
import { InputBase, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { Search as SearchIcon } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function SearchBar(props) {
  const { onSearchTextChange } = props;
  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleTextChange = (e) => {
    onSearchTextChange(e);
  };

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={handleSearch}
      style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
    >
      <InputBase
        className={classes.input}
        placeholder="Pesquisar..."
        inputProps={{ "aria-label": "search posts" }}
        onChange={handleTextChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
