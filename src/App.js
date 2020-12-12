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




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  render () {
    return (
      <Router>
        <div className="App container text-center" >
          <Switch>
            <Route path="/">
              <Home loggedIn={this.state.loggedIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
