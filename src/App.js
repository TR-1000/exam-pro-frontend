import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Header from './components/Header.js';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null,

    }
  }

  render () {
    console.log(this.data)
    return (

    <Quiz loggedIn={this.state.loggedIn} />
    );
  }
}

export default App;
