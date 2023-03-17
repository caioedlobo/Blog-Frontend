import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import "./components/pages/Home/Home.css";
import Feed from "./components/pages/Feed";
import About from "./components/pages/About";

const theme = createTheme();

function App() {
  return (
    <div
      className="background"
      /* style={{
        background: "linear-gradient(45deg, #141e30 10%, #243b55 90%)",
        height: "100vh",
      }} */
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
