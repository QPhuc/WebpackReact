import React, { Component } from "react";
import ServiceBus from './ServiceBus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Webpack</p>
          <ServiceBus></ServiceBus>
        </header>
      </div>
    );
  }
}

export default App;
