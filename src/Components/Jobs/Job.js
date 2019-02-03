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
        <div className="col-lg-6 row">
          <ul>
            <li>
              <h1>{title}</h1>
            </li>
            <li>
              <h6>{company}</h6>
            </li>
            <li>{listItems}</li>
          </ul>
        </div>
        <div className="col-lg-6 row">
          <div className="imgJob">
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
