import React, { Component } from 'react';
import Job from './Jobs/Job';
import me1 from '../images/me1.png';
import hathaway1 from '../images/hathawayhomes.png';
import Matt2 from '../images/Matt2.jpg';

class ProfessionalExperience extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [
				<Job
					title='FreeLance Developer'
					company='Self Employed'
					description={[
						'- Design and develop websites based on clients specific needs',
						'- Construct reusable components to be used in interactive UI kits',
						'- Technologies Used: Ruby on Rails, JavaScript, ReactJS, HTML, CSS'
					]}
					src={Matt2}
				/>,
				<Job
					title='Full Stack Web Developer'
					company='HathawayHomes-MA'
					description={[
						' - Designed and developed a full-service real estate website in which users are able to customize their search based on a variety of categories such as geographical location, price point, number of rooms, and more.',
						' - Displays featured listings from Zillow using their API',
						' - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, AJAX, Heroku, AWS, TDD'
					]}
					src={hathaway1}
				/>,
				<Job
					title='Full Stack Web Developer'
					company='ME & FM Society of B.C.'
					description={[
						'  - Worked on a team, developing a website for ME & FM Society ofB.C. that allows patients suffering from ME (MyalgicEncephalopathy) to find the best doctor by searching a broaddatabase.',
						'       - Allows patients to rate/comment these doctors based on their own experience.',
						' - Technologies used: Ruby on Rails, HTML, CSS, Bootstrap, Heroku'
					]}
					src={me1}
				/>
			]
		};
	}

	render() {
		const myJobs = this.state.jobs.map((job) => {
			return (
				<div className='jobsList'>
					<li>{job}</li>
				</div>
			);
		});
		return (
			<div className='emptySpace'>
				<a name='section1' />
				<div className='container'>
					<h1 className='title text-center'>Professional Experience</h1>
					<ul className='myJobs'>{myJobs}</ul>
				</div>
			</div>
		);
	}
}

export default ProfessionalExperience;
