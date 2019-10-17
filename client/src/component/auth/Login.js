import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
//import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      fireRedirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault(); //The preventDefault() method is used to prevent the browser from executing
    // the default action of the selected element.
    const User = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/users/login", User)
      .then(res => {
        console.log(res.data.isValid);
        if (res.data.isValid) {
          this.setState({ fireRedirect: true });
          return axios.post("/api/profile", res.data);
          //console.log(res.data);
        }
      })
      .catch(err => this.setState({ errors: err.response.data }));

    console.log(User);
  }
  render() {
    if (this.state.fireRedirect) return <Redirect to="/user/profile" />;
    return (
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-4 m-auto dark-overlay-form ">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your Account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-md"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-md"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>

                  {/* <Link to="/register"> */}
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
