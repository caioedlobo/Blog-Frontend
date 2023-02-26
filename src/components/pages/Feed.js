import React from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import SearchBar from "../SearchBar";

const Feed = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <CardFeed />
      <CardFeed />
      <CardFeed />
    </>
  );
};

export default Feed;
