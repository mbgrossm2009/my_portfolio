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
					<ul className='col-lg-12 job'>
						<div className='job_list'>
							<li>
								<h2> {company}</h2>
							</li>
							<li>
								<h6>{title}</h6>
							</li>
							<li>
								<h8>{listItems}</h8>
							</li>
						</div>
						<li>
							<div className='container'>
								<img className='col-lg-12 myImage' src={src} />
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Job;
