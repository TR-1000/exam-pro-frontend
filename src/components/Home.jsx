import React, { Component } from 'react';

import LogIn from './LogIn.js';
import Dashboard from './Dashboard.jsx'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }


  handleSuccessfulAuth() {
    this.props.handleLogin();
    this.props.history.push("/dashboard");
  }
  render() {

    return (
      <div className="container text-center">
        <main>
          <div>
            <h1 className="display-4 text-primary mt-3 mb-2 ">examPro</h1>
            <h3>Online exam and quiz managment system</h3>
            <img src="https://github.com/TR-1000/exam-pro-frontend/blob/master/public/home_image.png?raw=true"></img>
            <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
          </div>
        </main>
      </div>
    )
  }
}
