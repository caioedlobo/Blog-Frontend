import React from "react";
import { InputBase, IconButton } from "@mui/material";
import "./SearchBar.css";
import Paper from "@mui/material/Paper";
import { Search as SearchIcon } from "@mui/icons-material";

function SearchBar(props) {
  const { onSearchQueryChange } = props;

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleQueryChange = (e) => {
    onSearchQueryChange(e);
  };

  return (
    <Paper
      component="form"
      className="root"
      onSubmit={handleSearch}
      style={{ width: "100%", maxWidth: "600px", marginBottom: "20px" }}
    >
      <InputBase
        className="input"
        placeholder="Pesquisar..."
        inputProps={{ "aria-label": "search posts" }}
        onChange={handleQueryChange}
      />
      <IconButton type="submit" className="iconButton" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
