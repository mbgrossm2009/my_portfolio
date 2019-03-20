import React, { Component } from "react";

class Navbar extends Component {
  randomQuote() {
    var x = Math.floor(Math.random() * 11);
    console.log(x);
    var quotes = [
      [
        "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill"
      ][
        "Strive not to be a success, but rather to be of value. –Albert Einstein"
      ],
      [
        "'You miss 100% of the shots you don’t take. –Wayne Gretzky' - Michael Scott"
      ],
      ["Every strike brings me closer to the next home run. –Babe Ruth"],
      [
        "Life isn't about getting and having, it's about giving and being. –Kevin Kruse"
      ],
      [
        "Life is what happens to you while you’re busy making other plans. –John Lennon"
      ],
      ["We become what we think about. –Earl Nightingale"],
      [
        "Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll"
      ],
      [
        "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb"
      ],
      ["Eighty percent of success is showing up. –Woody Allen"],
      [
        "Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs"
      ],
      ["Winning isn’t everything, but wanting to win is. –Vince Lombardi"]
    ];
  }



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
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#section1">
                Professional Experience <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>


      </nav>
    );
  }
}

export default Navbar;
