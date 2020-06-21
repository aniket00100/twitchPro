import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import GoogleAuth from "../GoogleAuth";
import "../css/MuiAppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarRoot: {
    background:
      "linear-gradient(to right, #e8cbc0, #636fa4)",
      // dusk -> linear-gradient(to right, #2c3e50, #fd746c)
      // mauve -> linear-gradient(to right, #42275a, #734b6d)
      // dania ** -> linear-gradient(to right, #be93c5, #7bc6cc)
      // Rose colored lenses -> linear-gradient(to right, #e8cbc0, #636fa4)
      // radial gradient dark -> radial-gradient(circle, rgba(212,153,179,1) 0%, rgba(126,159,199,1) 100%)

    border: 0,
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonLink: {
    color: "white",
    fontWeight: 800,
    textTransform: "none",
    fontSize: "0.9em",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarRoot}>
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
            <Button className={classes.buttonLink}>
              <Link to="/" className="buttonLink">
                twitchPRO
              </Link>
            </Button>
            <Button className={classes.buttonLink}>
              <Link to="/" className="buttonLink">
                Streams
              </Link>
            </Button>
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
}
