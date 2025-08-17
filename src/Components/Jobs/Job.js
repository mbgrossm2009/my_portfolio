import React from 'react';

class Job extends React.Component {
	render() {
		const { title, company, description, src, url } = this.props;
		const listItems = description.map((item) => {
			return <li>{item}</li>;
		});

		return (
			<ul className='job col-md-12'>
				<li>
					<h2> {company}</h2>
				</li>
				<li>
					<h6>{title}</h6>
				</li>
				{/* <li>{listItems}</li> */}
				<li>
					<a href={url}>
						<img className='myImage img-fluid' src={src} alt='Github Link' />
					</a>
				</li>
			</ul>
		);
	}
}

export default Job;
