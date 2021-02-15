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
    <div>
      {states.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CoronaMapCard states={states} />
          <Legend legendItems={legendItemsInReverse} />
          <h1>hello</h1>
        </div>
      )}
    </div>
  );
};

export default CoronaMap;
