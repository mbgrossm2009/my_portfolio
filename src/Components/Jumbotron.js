import React, { Component } from "react";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import matt1 from "../images/Matt1.jpg";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          {/* Top of Jumboton Start */}
          <div className="col-lg-12 row">
            <h1 className="display-6">Welcome to my Portfolio!</h1>
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
          </div>

          {/* Top of JumboTron End*/}

          {/*JumboTron Bottom Start */}
          <div className="container">
          <div className="jumbotronBottom row">
            {/*Picture of me */}
            <div className="col-lg-6">
              <img src={matt1} className=" myPic img-fluid"  alt = "Matt Grossman"/>
            </div>
            {/* Picture of me end */}

            <div className="col-lg-6 col-sm myLinks">
              {/*Resume Start */}
              <section className="resume w-50 p-3  col-lg-6 col-md col-sm">
                <a
                  href="/MatthewGrossmanResume.pdf"
                  download="MatthewGrossmanResume"
                  className="download_link"
                >
                  Download My Resume Here
                </a>
              </section>

              {/*Resume End */}
              {/*Social Media Links Start */}
              <div className="socialMedia_links col-lg-12 ">

                <a href="https://www.linkedin.com/in/matt-grossman/">
                  <img src={linkedin} className="social" alt="Facebook" />
                </a>
                <a href="https://www.facebook.com/matt.grossman.18">
                  <img src={facebook} className="social" alt = "Facebook" />
                </a>
                <a href="https://github.com/mbgrossm2009">
                  <img src={github} className="social" alt="github"/>
                </a>
              </div>
              {/*Social Media Links End */}
            </div>
            <hr className="my-4" />
          </div>
        </div>
        {/* JumboTron Bottom End*/}
      </div>
    );
  }
}
export default Jumbotron;
