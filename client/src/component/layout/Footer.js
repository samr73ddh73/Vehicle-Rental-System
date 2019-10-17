import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-white mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} Samriddhi Singh
        </footer>
      </div>
    );
  }
}

export default Footer;
