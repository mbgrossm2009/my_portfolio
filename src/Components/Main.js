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
				<School name='Curry College' location='Milton,MA' major='Information Technology'>
					<p>
						<a href='https://www.curry.edu'>www.curry.edu</a>{' '}
					</p>
				</School>,
				<School name='Launch Academy' location='Remote' major='Full Stack Web Development'>
					<p>
						<a href='https://launchacademy.com/'>www.launchacademy.com</a>
					</p>
				</School>,
				<School name='Samex' location='Remote' major='Full Stack Web Development'>
					<p>
						<a href='https://apprentice.samex.online/'>www.apprentice.samex.online</a>
					</p>
				</School>,
				<School name='Udemy' location='Remote' major='React Development'>
					<p>
						<a href='https://www.udemy.com/the-complete-react-js-redux-course-build-modern-web-apps/'>
							Udemy Course
						</a>
					</p>
				</School>
			]
		};
	}

	render() {
		return (
			<div className='my_portfolio'>
				<Navbar />
				<div className='container'>
					<Jumbotron />

					<ProfessionalExperience />
					<h1 className=' edu_title text-center'>Education</h1>
					<div className='schools row'>{this.state.schools}</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Main;
