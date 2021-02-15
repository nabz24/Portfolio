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
      maxWidth="xl"
      style={{ backgroundColor: "grey", height: "55vh", padding: "0px" }}
    >
      <video width="750" height="500" controls>
        <source src={movie} type="video/mp4" />
      </video>
    </Container>
  );
};

export default PortfolioVideo;
