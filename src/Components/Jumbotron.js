import React, { Component } from 'react';
import placeholder from '../images/logo1.png';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import matt1 from '../images/Matt1.jpg';

class Jumbotron extends Component {
	render() {
		return (
			<div className='jumbotron'>
				<div className='container'>
					<div className='col-lg-12 row'>
						<h1 className='display-4'>Welcome to my Portfolio!</h1>
						<p className='lead'>
							Strong understanding of software engineering concepts and application development. A fast
							learner with analytical skills and a dedicated work ethic targeting an entry-level
							opportunity in Software Engineering.
						</p>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<img src={matt1} className='img-fluid' />
						</div>

						<div className='col-lg-5 float-right myLinks'>
							<div className='col-lg-12'>
								<button type='button' class='btn btn-primary btn-lg'>
									Send Me a Message
								</button>
							</div>
							<div className='col-lg-12'>
								<a href='https://www.facebook.com/matt.grossman.18'>
									<img src={facebook} className='social' />
								</a>
								<a href='https://www.linkedin.com/in/matt-grossman/'>
									<img src={linkedin} className='social' />
								</a>
								<a href='https://github.com/mbgrossm2009'>
									<img src={github} className='social' />
								</a>
							</div>
						</div>
						<hr className='my-4' />
					</div>
				</div>
			</div>
		);
	}
}

export default Jumbotron;
