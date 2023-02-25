import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import LoginForm from "./LoginForm";
import Home from "./pages/Home";

const theme = createTheme();

function App() {
  return (
    <div
      style={{ background: "linear-gradient(45deg, #141e30 10%, #243b55 90%)" }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
