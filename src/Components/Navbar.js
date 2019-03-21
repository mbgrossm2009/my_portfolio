import React, { Component } from "react";


class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      quote: "Hi"
    }
  }
 componentDidMount() {
    window.addEventListener('randomQuote', this.randomQuote())
}


   randomQuote(){
    var quotes= [
     '"Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill"',
      '"Strive not to be a success, but rather to be of value. –Albert Einstein"',
      '"You miss 100% of the shots you don’t take. –Wayne Gretzky\" -Michael Scott"',
     '" Every strike brings me closer to the next home run. –Babe Ruth"',
      '"Life isn\'t about getting and having, it\'s about giving and being. –Kevin Kruse"',
      '"Life is what happens to you while you’re busy making other plans. –John Lennon"',
      '"We become what we think about. –Earl Nightingale"',
      '"Life is 10% what happens to me and 90% of how I react to it. –Charles Swindol"',
      '"The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb"',
      '"Eighty percent of success is showing up. –Woody Allen"',
     '"Your time is limited, so don’t waste it living someone else’s life. –Steve Jobs"',
     '"Winning isn’t everything, but wanting to win is. –Vince Lombardi"'
    ];
     var x = Math.floor(Math.random() * 11);
     var myQuote = quotes[x].toString('')
     this.setState({quote: myQuote})
  }
  render() {
    return (
			<nav className="navbar navbar-light bg-light">
      <span className="navbar-text1">
      Matthew B. Grossman | 508-614-0979 | grossmanmatt@yahoo.com
      </span>
		  <span className="navbar-text2">
     {this.state.quote}


		  </span>
      		</nav>
    );
  }
}

export default Navbar;
