import React, { useState } from "react";
import {
  Card,
  Button,
  CardContent,
  Typography,
  Box,
  Container,
} from "@material-ui/core";

function CardFeed(props) {
  const { title, text, name, searchQuery } = props;

  const [showFullText, setShowFullText] = useState(false);

  const handleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const maxSizeText = 200;
  let trimmedText =
    text.length > maxSizeText ? text.slice(0, maxSizeText) + "..." : text;

  const highlightQuery = (str, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return str.replace(regex, `<mark>$1</mark>`);
  };

  const highlightedTitle = highlightQuery(title, searchQuery);
  const highlightedText = highlightQuery(text, searchQuery);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
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
                dangerouslySetInnerHTML={{ __html: highlightedTitle }}
              />
              <Typography
                style={{
                  marginBottom: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: "100%",
                }}
                dangerouslySetInnerHTML={{
                  __html: showFullText ? highlightedText : trimmedText,
                }}
              />
              {text.length > maxSizeText && (
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleShowFullText}
                  style={{
                    maxWidth: 140,
                    margin: 10,
                    alignSelf: "end",
                  }}
                >
                  {showFullText ? "Esconder" : "Mostrar mais"}
                </Button>
              )}
            </Box>
            <Box style={{ textAlign: "right" }}>
              <Typography color="textSecondary" variant="body4" component="p">
                {name}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CardFeed;
