import React from "react";

class Job extends React.Component {
  render() {
    const { title, company, description } = this.props;
    const listItems = description.map(item => {
      return (
        <div className="jobFunctions">
          <li>{item}</li>
        </div>
      );
    });

    return (
      <div className="col-lg-6 row">
        <ul>
          <li>
            <h1>{title}</h1>
          </li>
          <li>
            <h6>{company}</h6>
          </li>
          <li className="container">
          {listItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default Job;

// import React, { Component } from "react";

// class Job extends Component {
//   render() {
//     const { children, title, company, description } = this.props;

//     return (
//       <div className="col-lg-6 row">
//         <ul>
//           <li>
//             <h1>{title}</h1>
//           </li>
//           <li>
//             <h6>{company}</h6>
//           </li>

//           <li> {description}d</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Job;
