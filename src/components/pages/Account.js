import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import MenuAccount from "../MenuAccount";
import axios from "axios";

const Account = () => {
  const [posts, setPosts] = useState([]);
  const [accountId, setAccountId] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/accounts/account-id`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        setAccountId(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/all-posts/${accountId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accountId]);

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <MenuAccount />

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flexGrow: 2,
          }}
        > */}
        {posts.map((post) => (
          <CardFeed
            key={post.id}
            title={post.title}
            text={post.body}
            name={post.account.firstName + " " + post.account.lastName}
            date={post.createdAt}
          />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Account;
