import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "./actions";
import MUILoginButton from "./MUIComponents/MUILoginButton";

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1013803581517-rgpomndg9rus69n6psvnq620pbiquqdm.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderProperLoginButton = () => {
    if (this.props.isSignedIn === null) {
      return "Checking...";
    } else if (this.props.isSignedIn) {
      return "Sign Out";
    } else {
      return "Sign In with Google";
    }
  };

  onClickHandler = () => {
    if (this.props.isSignedIn === false) {
      this.auth.signIn();
    } else if (this.props.isSignedIn) {
      this.auth.signOut();
    }
  };

  render() {
    // console.log(this.state);
    // console.log('props => ', this.props);
    return (
      <MUILoginButton
        click={this.onClickHandler}
        buttonTitle={this.renderProperLoginButton()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("from mapStateToProps", state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
