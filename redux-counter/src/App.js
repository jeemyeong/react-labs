import React, { Component } from 'react';
import Buttons from 'components/counters/Buttons';
import CounterList from 'components/counters/CounterList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons/>
        <CounterList />
      </div>
    );
  }
}