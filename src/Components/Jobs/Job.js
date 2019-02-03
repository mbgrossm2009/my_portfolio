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
        <div className="col-lg-5 jobRow row">
          <ul>
            <li>
              <h1>{company}</h1>
            </li>
            <li>
              <h6>{company}</h6>
            </li>
            <li>{listItems}</li>
          </ul>
        </div>
        <div className="col-lg-12 row">
            <ul>
              <li>
                <img className="col-lg-4 myImage" src={src} />
              </li>
            </ul>
            </div></div>
    );
  }
}

export default Job;
