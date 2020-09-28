import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './Main/main.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }




  render() {
    return (
      <div>
      <Main />
      </div>
    )
  }


}