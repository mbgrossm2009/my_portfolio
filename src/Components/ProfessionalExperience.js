import React, { Component } from 'react';
import Job from './Jobs/Job';
import me1 from '../images/me1.png';
import hathaway1 from '../images/hathawayhomes.png';
import Matt2 from '../images/Matt2.jpg';
import cvs from '../images/cvs.png';

class ProfessionalExperience extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [
				<Job
					title='Freelance Developer'
					company=''
					description={[
						'Build, test, and maintain custom websites by integrating interactive UI elements.',
						'Develop reusable React components to streamline front-end functionality and improve user experience.',
						'Collaborate with clients throughout the design process to ensure satisfaction with the final product'
					]}
					src={Matt2}
				/>,
				<Job
					title='Full Stack Web Developer'
					company='ME & FM Society of B.C.'
					description={[
						'Collaborated with a team to create a search engine that connects patients with physicians based on their needs.',
						'Integrated a comment section to enable patient feedback, and ratings.',
						'Utilized Ruby on Rails, HTML, CSS, Bootstrap, and Heroku to build a responsive, user-friendly web application.'
					]}
					src={me1}
					url='https://sheltered-brushlands-68738.herokuapp.com/'
				/>,

				<Job
					title='Store Manager'
					company='CVS/Health'
					description={[
						'Lead a team of 15 ensuring smooth daily operations and top-notch customer service.',
						'Analyze sales data to drive performance improvements by ensuring products are always in stock to minimize waste and boost profitability.',
						'Coach and train staff to enhance performance, engagement, and retention.',
						'Leverage technology like point of sale and inventory systems to make operations more efficient and keep track of key metrics.'
					]}
          src={cvs}
          url = "https://www.cvs.com/"
				/>,

				<Job
					title='Full Stack Web Developer'
					company='HathawayHomes-MA'
					description={[
						' - Designed and developed a full-service real estate website with clean and organized code, enabling users to customizetheir property search based on various criteria such as location, price point, and room count.',
						'- Implemented a PostgreSQL database to store listings created by an Admin.',
						'- Integrated the Zillow API using REST architecture.',
						'- Installed and configured AWS and Heroku tools for development.',
						' Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku, AWS, Test Driven Development.'
					]}
					src={hathaway1}
					url='http://www.hathawayhomes-ma.com'
				/>
			]
		};
	}

	render() {
		const myJobs = this.state.jobs.map((job) => {
			return <div className='col-lg-6'>{job}</div>;
		});
		return (
			<div className='jobs'>
				<h1 className='title text-center'>Professional Experience</h1>

				<div className='container'>
					<div className='row'>{myJobs}</div>
				</div>
			</div>
		);
	}
}

export default ProfessionalExperience;
