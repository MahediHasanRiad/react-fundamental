import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import Profile from "./profile/index";
import Props from './props/index' // how to import component
import State from "./state";
import Events from "./events/event-index";
import Form from "./form";

// how to class to react-component
class App extends Component {
  render() {
    return (
      <div>
        <h1>This is my 1st react code</h1>
        {/* <Profile />    
        <Props /> */}
        {/* <State /> */}
        {/* <Events /> */}
        <Form />
      </div>
    );
  }
}

// export component
export default App;
