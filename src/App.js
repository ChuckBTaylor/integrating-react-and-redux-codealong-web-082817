import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    console.log("From App.js", this.props.store.getState());
    return (
      <div className="App" >
        <Counter store={this.props.store} />
      </div>
    );
  }
}

export default App;
