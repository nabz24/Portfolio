import React from "react";
import Home from "./Component/home";
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
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="xl" style={{ height: "100vh", padding: "0px" }}>
        <AppBar position="static" style={{ width: "100%" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Nabeel Services
            </Typography>
          </Toolbar>
        </AppBar>
        <Home />
      </Container>
    </div>
  );
}

export default App;
