import React from "react";
import Navbar from "../Navbar";
import CardFeed from "../CardFeed";
import MenuAccount from "../MenuAccount";

const Account = () => {
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
        <CardFeed
          key={1}
          title={"Teste"}
          text={"Teste"}
          name={"Teste"}
          date={"Teste"}
        />
      </div>
    </div>
  );
};

export default Account;
