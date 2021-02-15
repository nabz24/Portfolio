import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import PortfolioVideo from "./PortfolioVideo";
import CoronaMap from "./CoronaMap";
import axios from "axios";

const Home = () => {
  return (
    <Container maxWidth="xl" style={{ height: "100vh", padding: "0px" }}>
      <PortfolioVideo />
      <CoronaMap />
    </Container>
  );
};
export default Home;
