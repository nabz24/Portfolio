import React, { useState, useEffect } from "react";
import CoronaMap from "./CoronaMap";
import "leaflet/dist/leaflet.css";
import "./CoronaMap.css";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import { Container } from "@material-ui/core";

const CoronaMapCard = ({ states }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (state, layer) => {
    layer.options.fillColor = state.properties.color;
    const name = state.properties.NAME;
    const confirmedText = state.properties.confirmedText;
    const checkTimeText = state.properties.checkTime;
    const deathText = state.properties.deathText;
    const todaysCaseText = state.properties.todaysCasesText;
    const populationText = state.properties.populationText;
    const populationPercentText = state.properties.populationPercentText;

    var list =
      "<h2>" +
      name +
      "</h2>" +
      "<p><b>Last Updated: </b>" +
      checkTimeText +
      "<br><b>Confirmed Cases: </b>" +
      confirmedText +
      "<br><b>Current Cases: </b>" +
      todaysCaseText +
      "<br><b>Total deaths: </b>" +
      deathText +
      "<br><b>Population: </b>" +
      populationText +
      "<br><b>Percentage of Population that had confirmed cases: </b>" +
      populationPercentText +
      "</p>";
    layer.bindPopup(list);
  };

  return (
    <Container maxWidth="100%" style={{ height: "55vh", padding: "0px" }}>
      <Map
        style={{ height: "55vh", width: "100%" }}
        center={[37, -96]}
        zoom={3.5}
      >
        <GeoJSON style={mapStyle} data={states} onEachFeature={onEachCountry} />
      </Map>
    </Container>
  );
};

export default CoronaMapCard;
