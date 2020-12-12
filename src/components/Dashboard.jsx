import React from 'react'
import PropTypes from 'prop-types'

export default class Dashboard extends React.Component {
  render () {
    const { loggedIn } = this.props;

    return (
      <div className="test-secondary font-weight-bold pl-1">
        <h1>Welcome!</h1>
        <a href="/" className="font-weight-bold pl-1 ">Log Out</a>
      </div>
    );
  }
}
