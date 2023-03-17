import React from "react";
import LoginForm from "../../LoginForm";
import Navbar from "../../Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <ul className="background">
        <Navbar />
        <LoginForm />
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
