import React, { Component } from 'react';
import axios from 'axios';

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    const { email, password } = this.state;

    e.preventDefault();

    axios.post(
      `http://18.218.171.150:8080/examPro/examApi/login?email=${email}&password=${password}`, {withCredentials: true}
    )
    .then((response) => {
      console.log(response.data.startsWith("Welcome"));
      if (response.data.startsWith("Welcome")) {
        this.props.handleSuccessfulAuth();
      }

    })
    .catch((error) => {
      console.log("login error", error);
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          <input
            type="email"
            name="email"
            placeholder="email address"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </label>

        <input type="submit" value="Log In"/>

      </form>



    )
  }
}
