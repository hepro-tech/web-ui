import React, { Component } from 'react';

import LogoView from './logo-view';
import InformationView from './information-view';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoView />
        <InformationView />
      </div>
    );
  }
}

export default App;
