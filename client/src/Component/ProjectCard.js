import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

const ProjectCard = (props) => {
  const useStyless = makeStyles({
    root: {
      maxWidth: "40vw",
    },
    media: {
      height: 300,
      marginTop: "20px",
    },
  });

  const classes = useStyless();

  return (
    <Grid item xs={6} justify="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              window.open(`${props.url}`);
            }}
            size="small"
            color="primary"
          >
            Visit Site
          </Button>

          <Button
            onClick={() => {
              window.open(`${props.sourcecode}`);
            }}
            size="small"
            color="primary"
          >
            View Source Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
