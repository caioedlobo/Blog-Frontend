import React, { useState } from "react";
import LoginForm from "../../LoginForm";
import Navbar from "../../Navbar";
import "./Home.css";

const Home = (props) => {
  const [data, setData] = useState(props.isLoggedIn);

  const handleData = (value) => {
    setData(value);
    console.log(value);
  };

  return (
    <div>
      <ul className="background">
        <Navbar isLoggedIn={data} />
        <LoginForm updateIsLoggedIn={handleData} />
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Home;
