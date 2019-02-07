import React from 'react';

class Job extends React.Component {
	render() {
		const { title, company, description, src } = this.props;
		const listItems = description.map((item) => {
			return (
				<div className='jobFunctions'>
					<li>{item}</li>
				</div>
			);
		});

		return (
			<div>
				<div className='row'>
					<div className='col-lg-7'>
						<ul className='job'>
							<li>
								<h2>{company}</h2>
							</li>
							<li>
								<h6>{title}</h6>
							</li>
							<li>{listItems}</li>
						</ul>
					</div>

					<li>
						<img className='col-lg-5 myImage' src={src} />
					</li>
				</div>
			</div>
		);
	}
}

export default Job;
