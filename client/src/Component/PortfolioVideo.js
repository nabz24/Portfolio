import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import movie from "./Assets/My_Movie.mp4";

const PortfolioVideo = () => {
  return (
    <Container
      maxWidth="50%"
      style={{
        height: "70vh",
        padding: "10px",
        paddingTop: "20px",
        marginTop: "50px",
        width: "95%",
      }}
    >
      <video width="100%" height="100%" controls>
        <source src={movie} type="video/mp4" />
      </video>
    </Container>
  );
};

export default PortfolioVideo;
