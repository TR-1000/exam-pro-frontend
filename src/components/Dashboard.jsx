import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }



  render () {
    if (this.props.loggedIn) {
      return (
        <div className="container">
            <div className="card" style={{width: "18rem;"}}>
              <div className="card-header text-center">
                <h1 className="text-center">Welcome {this.props.user.fName}!</h1>
                  <div className="card-body">
                    <Link to="/quiz" className="btn btn-primary">Take Exam</Link>
                  </div>

              </div>
              <ul classNames="list-group list-group-flush">
                <li className="list-group-item"><h3>Name: {this.props.user.fName} {this.props.user.lName}</h3></li>
                <li className="list-group-item"><h3>Email: {this.props.user.email}</h3></li>
                <li className="list-group-item"><h3>Phone: {this.props.user.phone}</h3></li>
                <li className="list-group-item"><h3>DOB: {this.props.user.dob}</h3></li>
              </ul>
            </div>
        </div>

      )
    }
    return (
      <div className="test-secondary font-weight-bold pl-1">
        <h1>You Aren't Supposed to Be Here</h1>
      </div>
    );
  }
}
