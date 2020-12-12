import React, { Component } from 'react';

import LogIn from './LogIn.js';
import Dashboard from './Dashboard.jsx'

export default class Home extends Component {
  render() {
    const { loggedIn } = this.props;
    
    return (
      <div>
        <main>
          { loggedIn && (
            <span> <Dashboard /> </span>
          )}
          { loggedIn == null && (
            <div>
              <h1 className="display-4 text-primary mt-3 mb-2">examPro</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <LogIn />
            </div>
          )}
        </main>
      </div>
    )
  }
}
