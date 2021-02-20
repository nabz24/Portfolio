import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { features } from "../data/states.json";
import "leaflet/dist/leaflet.css";
import "./CoronaMap.css";
import axios from "axios";
import LoadStatesTask from "../tasks/LoadStatesTask";
import CoronaMapCard from "./CoronaMapCard";
import Loading from "./Loading";
import LegendItems from "../entities/LegendItems";
import Legend from "./Legend";
import { Container } from "@material-ui/core";

const CoronaMap = () => {
  const [states, setStates] = useState([]);
  const legendItemsInReverse = [...LegendItems].reverse(); // copy of legendItems

  const load = () => {
    const loadStatesTask = new LoadStatesTask();
    loadStatesTask.load(setStates);
  };
  useEffect(() => {
    load();
    console.log(states);
  }, []);

  return (
    <Container maxWidth="xl" style={{ height: "50%", padding: "0px" }}>
      {states.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <h1
            style={{
              fontSize: "2vw",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Covid-19 Total Confirmed Cases by State Data for the United States.
            Stay Safe!
          </h1>
          <CoronaMapCard states={states} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </Container>
  );
};

export default CoronaMap;
