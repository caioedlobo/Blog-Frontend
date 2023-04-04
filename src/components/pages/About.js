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
        {/*  Vivamus commodo elit id mi tempus condimentum. Aenean mi est, pulvinar
        ut purus nec, aliquet luctus purus. Cras in sapien a ex maximus
        hendrerit. Nunc pulvinar ultrices neque vel rhoncus. Nullam vulputate,
        tellus nec consequat vestibulum, est purus faucibus lacus, a mollis
        dolor augue quis massa. In ullamcorper pharetra arcu, in gravida diam
        eleifend sed. Nulla tristique placerat sem, et ultrices ante maximus
        non. Praesent feugiat et augue sit amet sodales. Praesent fringilla,
        turpis vitae auctor laoreet, ante arcu lobortis nisl, vitae porta justo
        eros eu leo. */}
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
