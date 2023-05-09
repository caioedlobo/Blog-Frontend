import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        style={{ color: "white", maxWidth: "70%" }}
      >

        Olá, meu nome é Caio Lobo, sou desenvolvedor back end e esse é um
        sistema de um Blog onde utilizei React.js e Spring Boot no seu
        desenvolvimento com o propósito de praticar o desenvolvimento de API's
        REST. Para mais informacões você pode visualizar o projeto em:
        https://github.com/caioedlobo/Blog.
      </Typography>
    </div>
  );
};

export default About;
