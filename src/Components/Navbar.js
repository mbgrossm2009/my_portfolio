import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar'>
				<span className='navbar-text1'>
					Matthew B. Grossman | 508-614-0979 |{' '}
					<a href='mailto:grossmanmatt@yahoo.com' id='email'>
						grossmanmatt@yahoo.com{' '}
					</a>
				</span>
				<span className='navbar-text2'>Javascript | ReactJS | Ruby on Rails | HTML5 | CSS</span>
			</nav>
		);
	}
}

export default Navbar;
