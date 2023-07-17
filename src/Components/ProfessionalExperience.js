import React, { Component } from "react";
import Job from "./Jobs/Job";
import me1 from "../images/me1.png";
import hathaway1 from "../images/hathawayhomes.png";
import Matt2 from "../images/Matt2.jpg";

class ProfessionalExperience extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        <Job
          title="FreeLance Developer"
          company="Self Employed"
          description={[
            "- Build, develop, and test customized websites to meet clients’ specific needs.",
            "- Construct reusable components to be used in interactive UI kits",
            "- Create reusable React components for interactive UI kits.",
            "- Maintain and enhance existing websites with updated content.",
            "- Stay current with emerging technologies and industry trends."
          ]}
          src={Matt2}
        />,
        <Job
          title="Full Stack Web Developer"
          company="ME & FM Society of B.C."
          description={[
            "- Collaborated with a team to develop a search engine that helps patients find the most suitable physicians based on theirrequirements.",
            "- Integrated a comment section allowing patients to engage and rate their experiences",
            "- Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku."
          ]}
          src={me1}
          url="https://sheltered-brushlands-68738.herokuapp.com/"
        />,
        <Job
          title="Full Stack Web Developer"
          company="HathawayHomes-MA"
          description={[
            " - Designed and developed a full-service real estate website with clean and organized code, enabling users to customizetheir property search based on various criteria such as location, price point, and room count.",
            "- Implemented a PostgreSQL database to store listings created by an Admin.",
            "- Integrated the Zillow API using REST architecture.",
            "- Installed and configured AWS and Heroku tools for development.",
            " Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku, AWS, Test Driven Development."
          ]}
          src={hathaway1}
          url="http://www.hathawayhomes-ma.com"
        />
      ]
    };
  }

  render() {
    const myJobs = this.state.jobs.map(job => {
      return <div className="col-lg-6">{job}</div>;
    });
    return (
      <div className="jobs">
        <h1 className="title text-center">Professional Experience</h1>

        <div className="container">
          <div className="row">{myJobs}</div>
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;
