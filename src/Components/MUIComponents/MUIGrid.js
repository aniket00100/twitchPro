import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SpacingGrid = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          {renderData(props.dataToRender, props.componentToRender)}
        </Grid>
      </Grid>
    </Grid>
  );
};

const renderData = (data, Component) => {
  const renderMaterial = data.map((stream) => {
    return (
      <div
        key={stream.id}
        style={{ height: "140px", width: "", padding: "1%" }}
      >
        <Component
          title={stream.title}
          description={stream.description}
        ></Component>
      </div>
    );
  });
  return renderMaterial;
};

export default SpacingGrid;
