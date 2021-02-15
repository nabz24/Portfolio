import React, { useState, useEffect } from "react";
import CoronaMap from "./CoronaMap";
import "leaflet/dist/leaflet.css";
import "./CoronaMap.css";
import { Map, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";

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
    const hospitalizedCurrText = state.properties.hospitalizedCurrText;
    const hospitalizedCumaText = state.properties.hospitalizedCumaText;

    var list =
      "<h2>" +
      name +
      "</h2>" +
      "<p><b>Last Updated: </b>" +
      checkTimeText +
      "<br><b>Confirmed Cases: </b>" +
      confirmedText +
      "<br><b>Current Hospitalizations: </b>" +
      hospitalizedCurrText +
      "<br><b>Total Hospitalizations: </b>" +
      hospitalizedCumaText +
      "<br><b>Total deaths: </b>" +
      deathText +
      "</p>";
    layer.bindPopup(list);
  };

  //console.log(states);

  return (
    <div>
      <Map
        style={{ height: "50vh", width: "100%" }}
        center={[50, -100]}
        zoom={4}
      >
        <GeoJSON style={mapStyle} data={states} onEachFeature={onEachCountry} />
      </Map>
    </div>
  );
};

export default CoronaMapCard;
