import React, { Component } from "react";
import School from "./Schools/School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [
        <School
          name="Southern New Hampshire University"
          location="Online - Expected Completion Date: Oct 2021"
          major="Master's Degree - Information Technology with a Concentraion in Software Application Development"
        >
          <p>
            <a href="https://www.snhu.edu">www.snhu.edu</a>
          </p>
        </School>,
        <School
          name="Curry College"
          location="Milton,MA"
          major="Bachelor's Degree - Information Technology"
        >
          <p>
            <a href="https://www.curry.edu">www.curry.edu</a>{" "}
          </p>
        </School>,
        <School
          name="Launch Academy"
          location="Online"
          major="Full Stack Web Development"
        >
          <p>
            <a href="https://launchacademy.com/">www.launchacademy.com</a>
          </p>
        </School>,
        <School
          name="Samex"
          location="Online"
          major="Full Stack Web Development"
        >
          <p>
            <a href="https://apprentice.samex.online/">
              www.apprentice.samex.online
            </a>
          </p>
        </School>,
        <School name="Udemy" location="Online" major="React Development">
          <p>
            <a href="https://www.udemy.com/the-complete-react-js-redux-course-build-modern-web-apps/">
              Udemy Course
            </a>
          </p>
        </School>
      ]
    };
  }

  render() {
    return <div className="schools row">{this.state.schools}</div>;
  }
}

export default Education;
