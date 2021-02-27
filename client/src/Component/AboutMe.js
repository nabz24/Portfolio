import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Container from "@material-ui/core/Container";
import mom from "./Assets/mom.JPG";
import niners from "./Assets/49ers.JPG";
import argentina from "./Assets/Argentina.JPG";
import nba from "./Assets/NBAFinals.JPG";
import wedding from "./Assets/wedding.JPG";
import snowboard from "./Assets/snowboard.PNG";
import zip from "./Assets/zip.jpg";
import rainbow from "./Assets/rainbow.jpg";
import hazel from "./Assets/hazel.jpg";
import africa from "./Assets/africa.jpg";
import fishing from "./Assets/fishing.jpg";
import brazil from "./Assets/brazil.jpg";
import champions from "./Assets/champions.jpg";
import doc from "./Assets/doc.jpg";
import resume from "./Assets/Nabeel_Ahmed_2021.pdf";

const AboutMe = () => {
  const tileData = [
    {
      img: brazil,
      title: "brazil",
      cols: 1,
      rows: 3,
    },
    {
      img: fishing,
      title: "fishing",
      cols: 1,
      rows: 3,
    },
    {
      img: hazel,
      title: "hazel",
      cols: 1,
      rows: 3,
    },
    {
      img: africa,
      title: "africa",
      cols: 2,
      rows: 3,
    },
    {
      img: argentina,
      title: "argentina",
      cols: 1,
      rows: 3,
    },

    {
      img: zip,
      title: "zip",
      cols: 1,
      rows: 3,
    },
    {
      img: niners,
      title: "niners",
      cols: 1,
      rows: 3,
    },
    {
      img: mom,
      title: "mom",
      cols: 1,
      rows: 3,
    },
    {
      img: rainbow,
      title: "rainbow",
      cols: 2,
      rows: 3,
    },
    {
      img: nba,
      title: "nba",
      cols: 1,
      rows: 3,
    },

    {
      img: snowboard,
      title: "snowboard",
      cols: 1,
      rows: 3,
    },
    {
      img: champions,
      title: "champions",
      cols: 1,
      rows: 3,
    },
    {
      img: doc,
      title: "doc",
      cols: 1,
      rows: 3,
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      paddingTop: "100px",
    },
    gridList: {
      width: "100%",
      height: 555,
    },
    title: {
      color: "red",
    },
    resumeTitle: {
      color: "red",
      marginBottom: "0px",
    },
    arefEnd: {
      paddingBottom: "20px",
    },
  }));
  const classes = useStyles();
  return (
    <Container>
      <Container className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Container>
      <Container>
        <h1 className={classes.title} style={{ textAlign: "center" }}>
          About Me
        </h1>
        <h3>
          I am a full-stack developer who was born and raised in San Jose,
          Califronia. I love all Bay-Area sports teams such as the 49ers,
          Giants, Earthquakes, and Sharks. I love to play sports and build
          applications. With the ability to program in various languages such as
          javascript, python, and C++, I can develop web applications and
          programs that can be useful for any business. I am a strong leader who
          can be relied on to get any job done.
        </h3>
        <h2 className={classes.resumeTitle}>Employment:</h2>
        <p>
          <b>YouTube via Cognizant</b>
          <br />
          Analyst
        </p>
        <p>
          <b>Google via Cognizant/Signature</b>
          <br />
          Data Analyst
        </p>
        <p>
          <b>Apple via Apex</b>
          <br />
          Software Developer/Data Analyst
        </p>
        <h2 className={classes.resumeTitle}>Skills:</h2>
        <p>
          <b>LANGUAGES:</b> Javascript, Python, C++, Ruby, Leaflet, D3, GitHub,
          JQuery, CSS3, HTML5, Java, Ajax
          <br />
          <b>DATABASES:</b> PostgresSQL, MySql, SQLite, Hadoop, Oracle SQL,
          Tableau, Hive, Spark
          <br />
          <b>FRAMEWORKS:</b> React, Django, Rails, Node.js, Angular, Flask,
          Electron
          <br />
          <b>WEB PLATFORMS:</b> Amazon Web Services, Heroku
          <br />
          <b>AUTOMATION TOOLS:</b> Selenium
          <br />
          <b>BUG TRACKING:</b> Google bug tracking software, Apple bug tracking
          software, Jira <br />
        </p>
        <h2 className={classes.resumeTitle}>Education:</h2>
        <p>
          B.S. in Business Management Information Systems; San Jose State
          University
          <br />
          Coding Dojo 14-Week Full Stack Developer Bootcamp
        </p>
        <h2 className={classes.resumeTitle}>Project Managment:</h2>
        <p>
          Developed and managed projects using SCRUM software development
          methodology. Have exposure to other project development methodologies
          such as RAD and Agile.
        </p>
        <h2 className={classes.resumeTitle}>Resume:</h2>
        <a className={classes.arefEnd} href={resume}>
          Download resume here
        </a>
      </Container>
    </Container>
  );
};
export default AboutMe;
