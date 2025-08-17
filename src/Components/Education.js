import React, { Component } from "react";
import School from "./Schools/School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [
        <School
          name="Southern New Hampshire University"
          gradDate="March 2022"
          major="Master's Degree - Information Technology: Software Application Development"
        >
          <p>
            <a href="https://www.snhu.edu">SNHU Homepage</a>
          </p>
        </School>,
        <School
          name="Curry College"
          gradDate="May 2013"
          major="Bachelor's Degree - Information Technology"
        >
          <p>
            <a href="https://www.curry.edu">Curry College Homepage</a>{" "}
          </p>
        </School>,
        <School
          name="Launch Academy"
          gradDate="November 2017"
          major="Full Stack Web Development"
        >
          <p>
            <a href="https://launchacademy.com/">Launch Academy Homepage</a>
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
