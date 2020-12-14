import React from 'react'
import axios from 'axios';
import { Route, Redirect } from "react-router-dom"

export default class LogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("http://18.218.171.150:8080/examPro/examApi/logout")
  }

  render () {
    return(
      <div>
        <h1>GoodBye!</h1>
        <Redirect to="/"/>
      </div>
    )
  }
}
