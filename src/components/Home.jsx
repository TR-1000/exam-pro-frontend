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

    // const { loggedIn, userName } = this.props;
    // if (loggedIn) {
    //   return (
    //     <div className="text-center">
    //       <p>{userName}</p>
    //       <Dashboard userName={userName}  />
    //     </div>
    //   )
    //
    // }

    return (
      <div className="container text-center">
        <main>
          <div>
            <h1 className="display-4 text-primary mt-3 mb-2 ">examPro</h1>
            <h3>Online exam and quiz managment system</h3>
            <img src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/002/889/original/exam.png"></img>
            <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
          </div>
        </main>
      </div>
    )
  }
}
