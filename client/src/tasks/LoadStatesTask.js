import { features } from "../data/states.json";
import axios from "axios";
import { map } from "leaflet";
import LegendItems from "../entities/LegendItems";

class LoadStatesTask {
  setSte = null;
  g = [2, 3, 4];
  mapStates = features;
  stateData = [];

  //call api
  load = (setStates) => {
    axios
      .get(`https://corona.lmao.ninja/v2/states?sort=&yesterday=`)
      .then((res) => {
        this.stateData = res.data;
        this.processCovidData(this.stateData);
        setStates(this.mapStates);
      })
      .catch((err) => console.log(err));
  };
  // put api data into states data that forms the leaflet states
  processCovidData = (covidStat) => {
    for (let i = 0; i < this.mapStates.length; i++) {
      const mapState = this.mapStates[i];
      const covidState = covidStat.find(
        (covidState) => covidState.state === mapState.properties.NAME
      );
      // create fields in dictionary so data can be entered
      mapState.properties.confirmed = 0;
      mapState.properties.confirmedText = "0";
      mapState.properties.checkTime = "";
      mapState.properties.death = 0;
      mapState.properties.deathText = "";
      mapState.properties.todaysCases = 0;
      mapState.properties.todaysCases = "";
      mapState.properties.population = 0;
      mapState.properties.populationText = "";
      mapState.properties.populationPercent = 0;
      mapState.properties.populationPercent = "";

      if (covidState != null) {
        const confirmed = Number(covidState.cases);
        const checkTime = Date(covidState.updated);
        const death = Number(covidState.deaths);
        const todaysCases = Number(covidState.todayCases);
        const population = Number(covidState.population);
        const poulationsPerc = ((confirmed / population) * 100).toFixed(2);
        mapState.properties.confirmed = confirmed;
        mapState.properties.confirmedText = this.formatNumberWithCommas(
          confirmed
        );
        mapState.properties.checkTime = checkTime.substr(0, 15);
        mapState.properties.death = death;
        mapState.properties.deathText = this.formatNumberWithCommas(death);
        mapState.properties.todaysCases = todaysCases;
        mapState.properties.todaysCasesText = this.formatNumberWithCommas(
          todaysCases
        );
        mapState.properties.population = population;
        mapState.properties.populationText = this.formatNumberWithCommas(
          population
        );
        mapState.properties.populationPercent = poulationsPerc;
        mapState.properties.populationPercentText = poulationsPerc + "%";
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
