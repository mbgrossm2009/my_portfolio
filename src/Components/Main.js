import React, { Component } from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import ProfessionalExperience from './ProfessionalExperience';
import School from './Schools/School';
import Footer from './Footer';
import Weather from './Weather';


class Main extends Component {
	constructor() {
		super();
		this.state = {
			schools: [
				<School name='Curry College' location='Milton,MA' field='Information Technology'>
					<p>I studied here </p>
				</School>,
				<School name='Launch Academy' location='Remote' field='Full Stack Web Development'>
					<p>I studeied here</p>
				</School>,
				<School name='Samex' location='Remote' field='Full Stack Web Development'>
					<p>I studied here</p>
				</School>
			]
		};
	}

	render() {
		return (
			<div className='my_portfolio'>
				{/* <Navbar />
				<Jumbotron />
				<ProfessionalExperience />
				<h1 className='text-center'>Education</h1>
				<div className='schools row'>{this.state.schools}</div>
				<Footer /> */}
				<Weather/>
			</div>
		);
	}
}

export default Main;
