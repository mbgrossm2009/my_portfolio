import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar'>
				<span className='navbar-text1'>
					Matthew B. Grossman | 508-614-0979 |{' '}
					<a href='mailto:mgrossman119@gmail.com' id='email'>
					mgrossman119@gmail.com{' '}
					</a>
				</span>
				<span className='navbar-text2'>Ruby on Rails | JavaScript | ReactJS | GatsbyJS | HTML5 | CSS</span>
			</nav>
		);
	}
}

export default Navbar;
