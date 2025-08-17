import React from 'react';

class School extends React.Component {
	render() {
		const { name, major, gradDate, children } = this.props;

		return (
			<ul className='col-lg-10 school'>
				<li>
					<h2>{name}</h2>
				</li>
				<li>
					<h6>{major}</h6>
				</li>
				<li>
					<h6>{gradDate}</h6>
				</li>
				<li>
					<h6>{children}</h6>
				</li>
			</ul>
		);
	}
}

export default School;
