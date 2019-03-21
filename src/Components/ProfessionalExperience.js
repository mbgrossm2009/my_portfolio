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
            "Design and develop websites based on clients specific needs",
            "- Construct reusable components to be used in interactive UI kits",
          ]}
          src={Matt2}
        />,
        <Job
          title="Full Stack Web Developer"
          company="ME & FM Society of B.C."
          description={[
            " Collaborated and developed a website, with a team, that allows patients to find the best doctor by searching a broad database.",
            " - Allows patients to rate/comment these doctors based on their own experience.",
          ]}
          src={me1}
        />,
        <Job
          title="Full Stack Web Developer"
          company="HathawayHomes-MA"
          description={[
            " Designed and built a full-service real estate website with clean and organized code, in which users are able to customize their search based on a variety of categories such as geographical location, price point, number of rooms, and more. "
          ]}
          src={hathaway1}
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
