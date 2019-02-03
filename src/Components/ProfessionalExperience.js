import React, { Component } from "react";
import Job from "./Jobs/Job";
import placeholder from "../images/logo1.png";
import me1 from "../images/me1.png";

class ProfessionalExperience extends Component {
  render() {
    let jobs = [
      <Job
        title="FreeLance Developer"
        company="Self Employed"
        description={[
          "- Design and develop websites based on clients specific needs",
          "- Construct reusable components to be used in interactive UI kits",
          "- Technologies Used: Ruby on Rails, JavaScript, ReactJS, HTML, CSS"
        ]}
        src={placeholder}
      />,
      <Job
        title="Full Stack Web Developer"
        company="HathawayHomes-MA"
        description={[
          " - Designed and developed a full-service real estate website in which users are able to customize their search based on a variety of categories such as geographical location, price point, numberof rooms, and more.",
          " - Displays featured listings from Zillow using their API",
          " - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, AJAX, Heroku, AWS, TDD"
        ]}
        src={placeholder}
      />,
      <Job
        title="Full Stack Web Developer"
        company="ME & FM Society of B.C."
        description={[
          "  - Worked on a team, developing a website for ME & FM Society ofB.C. that allows patients suffering from ME (MyalgicEncephalopathy) to find the best doctor by searching a broaddatabase.",
          "       - Allows patients to rate/comment these doctors based on their own experience.",
          " - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku"
        ]}
        src={me1}
      />
    ];

    const myJobs = jobs.map(job => {
      return (
        <div className="jobsList">
          <li>{job}</li>
        </div>
      );
    });
    return <ul className="myJobs">{myJobs}</ul>;
  }
}

export default ProfessionalExperience;
