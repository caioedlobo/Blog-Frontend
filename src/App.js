import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "./components/pages/Home/Home.css";
import Feed from "./components/pages/Feed";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import ForgotPassword from "./components/pages/ForgotPassword";
import axios from "axios";

const theme = createTheme();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/is-authenticated`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
      });
  }, [isLoggedIn]);

  return (
    <div className="background">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Feed isLoggedIn={isLoggedIn}/>} />
            <Route path="/about" element={<About isLoggedIn={isLoggedIn}/>} />
            <Route path="/login" element={<Home isLoggedIn={isLoggedIn} onLoginClick={isLoggedIn}/>} />
            <Route path="/feed" element={<Feed isLoggedIn={isLoggedIn}/>} />
            <Route path="/account" element={<Account isLoggedIn={isLoggedIn}/>} />
            <Route path="/forgot-password/:token" element={<ForgotPassword isLoggedIn={isLoggedIn}/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
