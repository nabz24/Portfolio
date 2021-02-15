import { features } from "../data/states.json";
import axios from "axios";
import { map } from "leaflet";
import LegendItems from "../entities/LegendItems";

class LoadStatesTask {
  setSte = null;
  g = [2, 3, 4];
  mapStates = features;
  stateData = [];

  load = (setStates) => {
    axios
      .get(`https://api.covidtracking.com/v1/states/current.json`)
      .then((res) => {
        this.stateData = res.data;
        this.processCovidData(this.stateData);
        console.log(res.data);
        //console.log(this.mapStates);
        setStates(this.mapStates);
      })
      .catch((err) => console.log(err));
  };

  processCovidData = (covidStat) => {
    console.log("hellop");
    for (let i = 0; i < this.mapStates.length; i++) {
      const mapState = this.mapStates[i];
      const covidState = covidStat.find(
        (covidState) => covidState.state === mapState.properties.STUSPS
      );

      mapState.properties.confirmed = 0;
      mapState.properties.confirmedText = "0";
      mapState.properties.checkTime = "";
      mapState.properties.death = 0;
      mapState.properties.deathText = "";
      mapState.properties.hospitalizedCurr = 0;
      mapState.properties.hospitalizedCurrText = "";
      mapState.properties.hospitalizedCuma = 0;
      mapState.properties.hospitalizedCumaText = "";

      if (covidState != null) {
        const confirmed = Number(covidState.positive);
        const checkTime = covidState.checkTimeEt;
        const death = Number(covidState.death);
        const hospCurr = Number(covidState.hospitalizedCurrently);
        const hospCuma = Number(covidState.hospitalizedCumulative);
        mapState.properties.confirmed = confirmed;
        mapState.properties.confirmedText = this.formatNumberWithCommas(
          confirmed
        );
        mapState.properties.checkTime = checkTime;
        mapState.properties.death = death;
        mapState.properties.deathText = this.formatNumberWithCommas(death);
        mapState.properties.hospitalizedCurr = hospCurr;
        mapState.properties.hospitalizedCurrText = this.formatNumberWithCommas(
          hospCurr
        );
        mapState.properties.hospitalizedCuma = hospCuma;
        mapState.properties.hospitalizedCumaText = this.formatNumberWithCommas(
          hospCuma
        );
        this.setCountryColor(mapState);
      }
    }
    //console.log(this.mapStates);
    //this.setState(this.mapStates);
  };

  formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  setCountryColor = (mapState) => {
    const legendItem = LegendItems.find((legendItem) =>
      legendItem.isFor(mapState.properties.confirmed)
    );

    if (legendItem != null) {
      mapState.properties.color = legendItem.color;
    }
  };
}

export default LoadStatesTask;
