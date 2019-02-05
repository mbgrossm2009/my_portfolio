import React from "react";

class Job extends React.Component {
  render() {
    const { title, company, description, src } = this.props;
    const listItems = description.map(item => {
      return (
        <div className="jobFunctions">
          <li>{item}</li>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <ul className="col-lg-6 job">
              <li>
                <h2>{company}</h2>
              </li>
              <li>
                <h6>{title}</h6>
              </li>
              <li>{listItems}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li>
                <img className="col-lg-8 myImage" src={src} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
