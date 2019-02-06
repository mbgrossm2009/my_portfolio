import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<a class='navbar-brand' href='#'>
					Matthew B. Grossman
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarText'
					aria-controls='navbarText'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon' />
				</button>
				<div class='collapse navbar-collapse' id='navbarText'>
					<ul class='navbar-nav mr-auto'>
						<li class='nav-item active'>
							<a class='nav-link' href='#section1'>
								Professional Experience <span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#section2'>
								Education
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#section3'>
								Projects
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
