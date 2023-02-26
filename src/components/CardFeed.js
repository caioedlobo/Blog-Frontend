import { React, useState } from "react";
import {
  Card,
  Button,
  CardContent,
  Typography,
  Box,
  Container,
} from "@material-ui/core";

function CardFeed(props) {
  const { title, text, name } = props;

  const [showFullText, setShowFullText] = useState(false);

  const handleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  const maxSizeText = 200;
  let text1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec quam porttitor, viverra metus vitae, eleifend nisl. Quisque euismod nibh cursus, molestie erat eget, vestibulum dolor. Aliquam erat volutpat. Phasellus fermentum aliquet mi, e";

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        elevation={6}
        style={{
          width: "100%",
          minWidth: 200,
          maxWidth: 525,
        }}
      >
        <CardContent>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h2"
                style={{ marginBottom: "10px" }}
              >
                Título do texto
              </Typography>
              <Typography
                style={{
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {showFullText ? text1 : text1.slice(0, maxSizeText) + "..."}
                {text1.length > maxSizeText && (
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleShowFullText}
                    style={{ maxWidth: 140 }}
                  >
                    {showFullText ? "Esconder" : "Mostrar mais"}
                  </Button>
                )}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography color="textSecondary" variant="body4" component="p">
                name
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CardFeed;
