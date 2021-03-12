import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import friendsImage from "./Assets/friends.png";
import ideaImage from "./Assets/idea.png";
import wishlistImage from "./Assets/wishlist.png";
import fireImage from "./Assets/fire.png";

const Projects = (props) => {
  const useStyles = {
    root: {
      flexGrow: 1,
      height: "100%",
      paddingTop: "70px",
    },
    paper: {
      //padding: theme.spacing(2),
      textAlign: "center",
      //color: theme.palette.text.secondary,
    },
  };

  const ProjectInfo = {
    idea: {
      image: ideaImage,
      name: "Ruby On Rails",
      details:
        "Idea is a Ruby on Rails web application. It is a forum where individuals can post ideas that they would like to share with the world. Individuals can like and view other users posts and likes. Idea is connected to a PostgresSQL database",
      url: "https://rocky-everglades-62295.herokuapp.com/main",
      sourcecode: "https://github.com/nabz24/Ruby_Black_Test",
    },
    wishlist: {
      image: wishlistImage,
      name: "Django",
      details:
        "Wishlist is a website developed with Django and Python. With WishList, individuals can post what they would like for the holidays or any special occasion. Users can add other's wishes to their list or view other's wishlists. Wishlist is connected to a SQLite database",
      url: "https://frozen-depths-24914.herokuapp.com/",
      sourcecode: "https://github.com/nabz24/wish_list",
    },
    friends: {
      image: friendsImage,
      name: "Angular",
      details:
        "Full Friends is a Angular web application designed to help individuals keep track of their friends or loved ones birthdays. The website is connected to a MongoDB database",
      url: "https://powerful-dawn-16339.herokuapp.com/dashboard",
      sourcecode: "https://github.com/nabz24/friends_mean",
    },
    fire: {
      image: fireImage,
      name: "React",
      details:
        "During the Califronia wildfires in 2020 mass evacuations took place. In a blink of an eye, people were asked to leave their homes. This website was created to help households maintain a list of items that are essential for the next time evacuations occur.",
      url: "http://54.219.181.231/",
      sourcecode: "https://github.com/nabz24/MERN-Deployment",
    },
  };

  return (
    <Container maxWidth="100%" style={useStyles.root}>
      <h3>
        Thank you for visiting my projects. Here are some website I have created
        using various frameworks.
      </h3>
      <Grid container spacing={2} align="center">
        <ProjectCard
          image={ProjectInfo.fire.image}
          name={ProjectInfo.fire.name}
          details={ProjectInfo.fire.details}
          url={ProjectInfo.fire.url}
          sourcecode={ProjectInfo.fire.sourcecode}
        />
        <ProjectCard
          image={ProjectInfo.wishlist.image}
          name={ProjectInfo.wishlist.name}
          details={ProjectInfo.wishlist.details}
          url={ProjectInfo.wishlist.url}
          sourcecode={ProjectInfo.wishlist.sourcecode}
        />
        <ProjectCard
          image={ProjectInfo.idea.image}
          name={ProjectInfo.idea.name}
          details={ProjectInfo.idea.details}
          url={ProjectInfo.idea.url}
          sourcecode={ProjectInfo.idea.sourcecode}
        />
        <ProjectCard
          image={ProjectInfo.friends.image}
          name={ProjectInfo.friends.name}
          details={ProjectInfo.friends.details}
          url={ProjectInfo.friends.url}
          sourcecode={ProjectInfo.friends.sourcecode}
        />
      </Grid>
    </Container>
  );
};

export default Projects;
