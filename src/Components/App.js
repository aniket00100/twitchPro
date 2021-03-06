import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import MUIAppBar from "./MUIComponents/MUIAppBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <MUIAppBar />
          <div className="ui container">
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
