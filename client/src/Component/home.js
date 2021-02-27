import React, { useEffect, useState } from "react";
import PortfolioVideo from "./PortfolioVideo";
import CoronaMap from "./CoronaMap";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <Container maxWidth="xl" style={{ height: "100vh", padding: "0px" }}>
      <PortfolioVideo />
      <CoronaMap />
    </Container>
  );
};
export default Home;
