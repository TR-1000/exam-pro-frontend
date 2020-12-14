import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Header from './components/Header.js';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import Dashboard from './components/Dashboard.jsx';
import LogOut from './components/LogOut.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    this.checkLogin().catch((error) => {
      console.log("server error. can't log on");

      console.log("not logged in");
      console.log("login error", error);
    });;
  }

  handleLogout() {
    this.setState({
      loggedIn: false,
      user: {}
    })
  }

  handleLogin() {
    console.log("logging on");
    this.checkLogin();

  }

  async checkLogin() {
    console.log("checking login status");
    const res = await
    axios.get("http://18.218.171.150:8080/examPro/examApi/user/info")

      if (this.state.loggedIn==false && typeof(res.data)==='object') {
        console.log("currently log in on the server");
        console.log("loggin in client");
        await this.setState({
          loggedIn: true,
          user: res.data
        })
      } 

  }

  render () {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/"><h3>examPro</h3></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  {<a className="nav-link" href="#">About</a>}
                </li>
                <li className="nav-item">
                  {this.state.loggedIn &&<Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>}
                </li>
              </ul>
              <span className="navbar-text">
                {this.state.loggedIn && <a href="/logout" className="btn btn-primary">Log Out</a>}
              </span>
            </div>
          </nav>



          <Switch>

            <Route exact path="/" render={(props)=>(
              <Home {...props} loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} />)} />

            <Route exact path="/dashboard" render={(props)=>(
              <Dashboard { ...props} loggedIn={this.state.loggedIn} user={this.state.user} checkLogin={this.checkLogin} />)} />

            <Route exact path="/quiz" render={(props)=>(
              <Quiz { ...props} loggedIn={this.state.loggedIn}/>)} />

            <Route exact path="/logout" component={LogOut}></Route>

          </Switch>
          <footer className="my-5 pt-5 text-muted text-center text-small navbar-dark bg-dark">
        <p className="mb-1">© 2020 examPro</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>


        </div>
      </Router>
    );
  }
}

export default App;
