import React, { Component } from "react";

class ProfessionalExperience extends Component {
  render() {
    return (
      <div className="experienceList ">
        <ul>
          <li>
            <h2>FreeLancer Web Developer</h2>
            <h6>Self Employed</h6>
          </li>
          <div class="container">
            <li>
              - Design and develop websites based on clients specific needs
            </li>
            <li>
              - Construct reusable components to be used in interactive UI kits
            </li>
            <li>
              - Technologies Used: Ruby on Rails, JavaScript, ReactJS, HTML, CSS{" "}
            </li>
          </div>
        </ul>

        <ul>
          <li>
            <h2>HathawayHomes-MA</h2>
            <h6>Full Stack Web Developer</h6>
          </li>
          <div class="container">
            <li>
              - Designed and developed a full-service real estate website in
              which users are able to customize their search based on a variety
              of categories such as geographical location, price point, number
              of rooms, and more.
            </li>
            <li>- Displays featured listings from Zillow using their API</li>
            <li>
              - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, AJAX,
              Heroku, AWS, TDD
            </li>
          </div>
        </ul>

        <ul>
          <li>
            <h2>ME & FM Society of B.C.</h2>
            <h6>Full Stack Web Developer</h6>
          </li>
          <div class="container">
            <li>
              - Worked on a team, developing a website for ME & FM Society of
              B.C. that allows patients suffering from ME (Myalgic
              Encephalopathy) to find the best doctor by searching a broad
              database.
            </li>
            <li>
              - Allows patients to rate/comment these doctors based on their own
              experience.
            </li>
            <li>
              - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default ProfessionalExperience;
