import React, { Component } from 'react';
import axios from 'axios';

export default class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
      `http://localhost:8080/examPro/examApi/login?email=${email}&password=${password}`,
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("login error", error);
    });

  }

  render() {
    return (
      <div class="mb-3">


        <label for="email" className="form-label">
          Email address
          <input
            className="form-control me-2"
            type="email"
            name="email"
            placeholder="email address"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </label>



        <label for="password" className="form-label">
          Password
          <input
            className="form-control me-2"
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </label>

        <input type="submit" value="Log In" type="button" className="btn btn-primary" />

      


      </div>



    )
  }
}

// const LogIn = () => {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//
//
//   return (
//     <Form>
//
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//
//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" ref={passwordRef} placeholder="Password" />
//       </Form.Group>
//
//       <Button variant="primary" type="submit">
//         Log In
//       </Button>
//
//     </Form>
//   )
// }
//
// export default LogIn;
