import React from "react";
import { Container } from "@material-ui/core";

const Legend = ({ legendItems }) => {
  return (
    <Container
      maxWidth="xl"
      style={{
        height: "11vh",
        padding: "0px",
        display: "flex",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.title}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: "flex",
            alignItems: "center", // vertical
            justifyContent: "center", //horizontal
            color: item.textColor,
            height: "10vh",
            fontWeight: "bolder",
            fontSize: "1.5vw",
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </Container>
  );
};

export default Legend;
