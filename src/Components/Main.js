import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import ProfessionalExperience from './ProfessionalExperience';
import School from './Schools/School';
import Footer from './Footer';
import Education from './Education'

class Main extends Component {

	render() {
		return (
			<div className='my_portfolio'>
				<Navbar />
				<div className='container'>
					<Jumbotron />
					<ProfessionalExperience />
					<h1 className=' edu_title text-center'>Education</h1>
					<Education />
					</div>
				<Footer />
			</div>
		);
	}
}

export default Main;
