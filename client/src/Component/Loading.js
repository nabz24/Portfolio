import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}
    >
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loading;
