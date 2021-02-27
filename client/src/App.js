import React from "react";
import { Link, Router, navigate } from "@reach/router";
import Home from "./Component/home";
import Projects from "./Component/Projects";
import AboutMe from "./Component/AboutMe";
import "./App.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      textAlign: "center",
      fontSize: "24px",
    },
    navTitle: {},
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function goHome() {
    setAnchorEl(null);
    navigate("/home");
  }

  function goProject() {
    setAnchorEl(null);
    navigate("/projects");
  }

  function goMe() {
    setAnchorEl(null);
    navigate("/aboutMe");
  }

  const classes = useStyles();

  return (
    <Container
      maxWidth="l"
      style={{
        height: "100vh",
        padding: "0px",
        width: "100vw",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <AppBar position="fixed" style={{ width: "100%" }}>
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon color="secondary" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.navTitle} onClick={goMe}>
              About Me
            </MenuItem>
            <MenuItem className={classes.navTitle} onClick={goProject}>
              Projects
            </MenuItem>
            <MenuItem className={classes.navTitle} onClick={goHome}>
              Covid-19 Map
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title} onClick={goHome}>
            Nabeel Services
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Home path="/home" default />
        <Projects path="/projects" />
        <AboutMe path="aboutMe" />
      </Router>
    </Container>
  );
}

export default App;
