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
        component="h1"
        gutterBottom
        style={{ color: "white", maxWidth: "70%" }}
      >
        Vivamus commodo elit id mi tempus condimentum. Aenean mi est, pulvinar
        ut purus nec, aliquet luctus purus. Cras in sapien a ex maximus
        hendrerit. Nunc pulvinar ultrices neque vel rhoncus. Nullam vulputate,
        tellus nec consequat vestibulum, est purus faucibus lacus, a mollis
        dolor augue quis massa. In ullamcorper pharetra arcu, in gravida diam
        eleifend sed. Nulla tristique placerat sem, et ultrices ante maximus
        non. Praesent feugiat et augue sit amet sodales. Praesent fringilla,
        turpis vitae auctor laoreet, ante arcu lobortis nisl, vitae porta justo
        eros eu leo.
        {/* Olá, meu nome é Caio Lobo, sou desenvolvedor back end e esse é um sistema de um Blog onde utilizei React.js no Front end e Spring Boot no Back end no seu desenvolvimento. Nele você pode se cadastrar e se autenticar através da aba de "Login". Para isso, utilizei o Spring Security no registro e autenticação do usuário, através do JWT. */}
      </Typography>
    </div>
  );
};

export default About;
