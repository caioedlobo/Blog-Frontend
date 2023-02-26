import React, { useState } from "react";
import { InputBase, IconButton, makeStyles, Paper } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";

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
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSearch}>
      <InputBase
        className={classes.input}
        placeholder="Pesquisar..."
        inputProps={{ "aria-label": "search posts" }}
        value={searchText}
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
