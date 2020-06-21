import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const ButtonAppBar = (props) => {
  const classes = useStyles();

  return <Button onClick={props.click} className={classes.buttonLink}>{props.buttonTitle}</Button>;
};

export default ButtonAppBar;
