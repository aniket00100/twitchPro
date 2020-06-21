import React from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../actions";
import MUISkeleton from "../MUIComponents/MUISkeleton";

// import MUIGrid from "../MUIComponents/MUIGrid";
import MUIMediaCard from "../MUIComponents/MUIMediaCard";
import "../css/streamList.css";

class StreamList extends React.Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderStreams = () => {
    const streams = this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="five wide column mediaCardItem">
          <MUIMediaCard title={stream.title} description={stream.description} />
        </div>
      );
    });

    return <div className="ui grid">{streams}</div>;
  };
  renderSkeleton = () => {
    return <MUISkeleton />;
  };

  render() {
    let streamsLength = this.props.streams.length;
    let contentToRender;
    if (streamsLength < 1) {
      contentToRender = (
        <div className="listDiv">
          <div>{this.renderSkeleton()}</div>
          <br />
          <div>{this.renderSkeleton()}</div>
        </div>
      );
    } else {
      contentToRender = <div className="listDiv">{this.renderStreams()}</div>;
    }
    return contentToRender;
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
