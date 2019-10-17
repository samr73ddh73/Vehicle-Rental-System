import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from "react-redux";

import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Book from "./component/Book";
import Profile from "./component/Profile";

class App extends Component {
  render() {
    return (
      //<Provider>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/user/profile" component={Profile} />
          </div>

          <Footer />
        </div>
      </Router>
      //</Provider>
    );
  }
}

export default App;
