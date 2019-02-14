import React from 'react';

class Job extends React.Component {
	render() {
		const { title, company, description, src } = this.props;
		const listItems = description.map((item) => {
			return <li>{item}</li>;
		});

		return (
			<ul className='job'>
				<li>
					<h2> {company}</h2>
				</li>
				<li>
					<h6>{title}</h6>
				</li>
				<li>{listItems}</li>
				<li>
					<img className='col-lg-12 myImage' src={src} />
				</li>
			</ul>
		);
	}
}

export default Job;
