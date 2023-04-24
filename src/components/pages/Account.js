import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import MenuAccount from "../MenuAccount";
import axios from "axios";

const Account = () => {
  const [posts, setPosts] = useState([]);
  const [accountId, setAccountId] = useState("1");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/all-posts/${accountId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "column",
          background: "red",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <MenuAccount />
        {posts.map((post) => (
          <CardFeed
            key={post.id}
            title={post.title}
            text={post.body}
            name={post.account.firstName + " " + post.account.lastName}
            date={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Account;
