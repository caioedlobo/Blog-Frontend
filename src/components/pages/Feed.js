import React, { useState } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import SearchBar from "../SearchBar";

const posts = [
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
];

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearchTextChange = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(text) ||
        post.text.toLowerCase().includes(text) ||
        post.name.toLowerCase().includes(text)
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearchTextChange={handleSearchTextChange} />

      {filteredPosts.map((post, index) => (
        <CardFeed
          key={index}
          title={post.title}
          text={post.text}
          name={post.name}
        />
      ))}
    </>
  );
};

export default Feed;
