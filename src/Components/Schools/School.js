import React from 'react';

class School extends React.Component {
	render() {
		const { name, field, location, children } = this.props;

		return (
			<ul className='col-lg-4'>
				<li>
					<h2>{name}</h2>
				</li>
				<li>
					<h6>{field}</h6>
				</li>
				<li>
					<h6>{location}</h6>
				</li>
				<li>
					<h6>{children}</h6>
				</li>
			</ul>
		);
	}
}

export default School;
