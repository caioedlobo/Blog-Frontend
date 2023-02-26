import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@material-ui/core";

function MyCard(props) {
  const { title, text, name } = props;

  return (
    <Container
      style={{
        display: "flex",
        minWidth: 400,
        maxWidth: 550,
        justifyContent: "center",
      }}
    >
      <Card elevation={6}>
        <CardContent>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography
                variant="h5"
                component="h2"
                style={{ marginBottom: "10px" }}
              >
                Título do texto
              </Typography>
              <Typography style={{ marginBottom: "5px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec quam porttitor, viverra metus vitae, eleifend nisl.
                Quisque euismod nibh cursus, molestie erat eget, vestibulum
                dolor. Aliquam erat volutpat. Phasellus fermentum aliquet mi, eu
                pharetra est maximus quis. Ut laoreet eget urna non gravida. Sed
                ullamcorper metus a iaculis porttitor. Donec mi lectus,
                pellentesque nec arcu id, volutpat aliquam tortor. In tellus ex,
                tristique nec volutpat a, lobortis et ex. Sed sed magna posuere,
                dignissim mi nec, mollis nisi. Suspendisse at mi pretium,
                iaculis purus sed, aliquet mi.
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

export default MyCard;
