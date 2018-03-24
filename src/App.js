import React, { Component } from 'react';
import axios from 'axios';
import _ from 'partial-js';
import Container from "./hoc/Container";
class App extends Component {
  render() {
    return (
      <div>
        <Container/>
      </div>
    );
  }
}
export default App;