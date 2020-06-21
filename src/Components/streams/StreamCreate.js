// A very important file to learn the redux form values validation
// check out the validate function outside the class

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../actions";
import TextField from "@material-ui/core/TextField";
import MUIButton from "../MUIComponents/MUIButton";
import "../css/streamCreate.css";

class StreamCreate extends React.Component {
  renderInput = (formProps) => {
    const { input, label, meta } = formProps;

    let error = false;
    let helperText = "";

    // here we are making sure that only when the user attempts to change the value of the Field
    // or enters any unexpected value then the error is displayed for our Field elements
    if (meta.touched && meta.error) {
      error = true;
      helperText = meta.error;
    }

    return (
      <div className="field input_div_field">
        {/* <label>{formProps.label}</label> */}
        <TextField
          {...input}
          id="outlined-basic"
          label={label}
          variant="outlined"
          color="primary"
          className="TextField"
          autoComplete="off"
          error={error}
          helperText={helperText}
        />
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2.5%" }}>
        <form className="ui" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Stream Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Stream Description"
          />
          <MUIButton title="Create" buttonType="submit" />
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  // Here we are setting an object called error.
  // It is imperative to set the properties of this object with the same
  // name as the name property of the respective Field element
  // validate function will be executed every time the Field value changes
  // or when the component is first rendered

  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
