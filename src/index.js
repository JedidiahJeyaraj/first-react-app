import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'jedi'
    };
  }

  render() {
    return (
      <div>
       <Hello firstName={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
// render(<Hello />, document.getElementById('root1'));
