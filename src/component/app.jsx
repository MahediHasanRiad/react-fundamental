import React, { Component } from "react";

import Profile from "./profile/index";
import Props from './props/index' // how to import component

// how to class to react-component
class App extends Component {
  render() {
    return (
      <div>
        <h1>This is my 1st react code</h1>
        <Profile />    
        <Props />
      </div>
    );
  }
}

// export component
export default App;
