import React, { Component } from "react";
import placeholder from "../images/logo1.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import matt1 from "../images/Matt1.jpg";

class Jumbotron extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocuemntLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-lg-12 row">
            <h1 className="display-4">Welcome to my Portfolio!</h1>
            <p className="lead">
              My name is Matthew Grossman and I am a software developer looking
              for an entry level position where I can continue to learn and grow
              within the developing field. I am a fast learner with analytical
              skills and a dedicated work ethic. I excel in Javascript, ReactJS,
              Ruby on Rails, HTML5, CSS and continue to expand my knowledge as
              both a coder and developer through online courses, collaborations
              with peers and self teaching.
            </p>
          </div>
          <div className="jumbotronBottom row">
            <div className="col-lg-6">
              <img src={matt1} className="img-fluid" />
            </div>

            <div className="col-lg-5 col-sm float-right myLinks">
              <div className="resume w-50 p-3 col-lg-10 col-md col-sm">
                <a
                  href="/MatthewGrossmanResume.pdf"
                  download="MatthewGrossmanResume"
                >
                  Download My Resume Here
                </a>
              </div>
              <div className="socialMedia_links col-lg-12 col-sm">
                <a href="https://www.github.com">
                  <img src={github} className="social" />
                </a>
                <a href="https://www.linkedin.com">
                  <img src={linkedin} className="social" />
                </a>
                <a href="https://www.facebook.com">
                  <img src={facebook} className="social" />
                </a>
              </div>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    );
  }
}
export default Jumbotron;
