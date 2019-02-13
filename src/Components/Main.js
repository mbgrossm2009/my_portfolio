import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import ProfessionalExperience from './ProfessionalExperience';
import School from './Schools/School';
import Footer from './Footer';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			schools: [
				<School name='Curry College' location='Milton,MA' field='Information Technology'>
					<p>
						<a href='https://www.curry.edu' target='_blank'>
							HomePage
						</a>{' '}
					</p>
				</School>,
				<School name='Launch Academy' location='Remote' field='Full Stack Web Development'>
					<p>
						<a href='https://launchacademy.com/' target='_blank'>
							HomePage
						</a>
					</p>
				</School>,
				<School name='Samex' location='Remote' field='Full Stack Web Development'>
					<p>
						<a href='https://apprentice.samex.online/' target='_blank'>
							HomePage
						</a>
					</p>
				</School>,
				<School name='Udemy' location='Remote' field='React Development'>
					<p>
						<a
							href='https://www.udemy.com/the-complete-react-js-redux-course-build-modern-web-apps/'
							target='_blank'
						>
							HomePage
						</a>
					</p>
				</School>
			]
		};
	}

	render() {
		return (
			<div>
				<div className='my_portfolio'>
					<Navbar />
					<Jumbotron />
					<h1 className='title text-center'>Professional Experience</h1>

					<ProfessionalExperience />

					<h1 className='edu_title text-center'>Education</h1>

					<div className='schools row'>{this.state.schools}</div>
					<a name='section2' />

					<Footer />
				</div>
			</div>
		);
	}
}

export default Main;
