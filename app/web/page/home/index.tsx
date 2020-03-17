import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// console.log(window.__INITIAL_STATE__);

class Home extends Component<any, any> {
  render() {
    return <div>home</div>
  }
}
const root = document.getElementById('app');

ReactDOM.render(<Home />, root)
