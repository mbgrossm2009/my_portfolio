import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Matthew B. Grossman
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Professional Experience <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Projects
            </a>
            <a class="nav-item nav-link" href="#">
              Education
            </a>
            <a class="nav-item nav-link" href="#">
              Fun Facts
            </a>

            <a class="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
