import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      isVitian: "",
      designation: "",
      errors: {}
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      isVitian: this.state.isVitian,
      designation: this.state.designation
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));

    console.log(newUser);
  }
  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-4 m-auto dark-overlay-form">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create your Account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <div className="error">{this.state.errors.name}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    <div className="error">{this.state.errors.email}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <div className="error">{this.state.errors.password}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    <div className="error">{this.state.errors.password2}</div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Are you a VITian"
                      name="isVitian"
                      value={this.state.isVitian}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="designation"
                      name="designation"
                      value={this.state.designation}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
