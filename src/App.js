import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";

const theme = createTheme();

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #141e30 10%, #243b55 90%)",
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/Blog-Frontend" element={<Feed />} />
            <Route path="/Blog-Frontend/login" element={<Home />} />
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
