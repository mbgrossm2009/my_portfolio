import React, { Component } from "react";
import School from './Schools/School'


class Education extends Component {
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
			<div className='schools row'>{this.state.schools}</div>

		);
	}
}

export default Education;
