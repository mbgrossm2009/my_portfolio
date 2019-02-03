import React, { Component } from "react";
import placeholder from "../images/logo1.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to my Portfolio!</h1>
        <div className="col-lg-12 row">
          <div className="col-lg-6">
            <p className="lead">
              Strong understanding of software engineering concepts and
              application development. A fast learner with analytical skills and
              a dedicated work ethic targeting an entry-level opportunity in
              Software Engineering.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={placeholder} className="myPic" />
          </div>
        </div>
        <div className="myLinks">
          <a href="https://www.facebook.com">
            <img src={facebook} className="social" />
          </a>
          <a href="https://www.linkedin.com">
            <img src={linkedin} className="social" />
          </a>
          <a href="https://www.github.com">
            <img src={github} className="social" />
          </a>
        </div>

        <hr className="my-4" />
        <p>JavaScript | ReactJS | Ruby on Rails | HTML | CSS</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default Jumbotron;
