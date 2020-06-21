import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background:
      "radial-gradient(circle, rgba(212,153,179,1) 0%, rgba(126,159,199,1) 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "40px",
    fontSize: "1.2em",
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    "&:hover": {
      borderRadius: 0,
    },
  },
  label: {
    textTransform: "none",
  },
});

const MUIButton = (props) => {
  const classes = useStyles();

  return (
    <div style={{ padding: "1%" }}>
      <Button
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          label: classes.label, // class name, e.g. `classes-nesting-label-x`
        }}
        type={props.buttonType}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default MUIButton;
