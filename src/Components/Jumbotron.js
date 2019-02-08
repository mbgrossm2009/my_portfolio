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
							My name is Matthew Grossman and I am a software developer looking for an entry level
							position where I can continue to learn and grow within the developing field. I am a fast
							learner with analytical skills and a dedicated work ethic. I excel in Javascript, ReactJS,
							Ruby on Rails, HTML5, CSS and continue to expand my knowledge as both a coder and developer
							through online courses, collaborations with peers and self teaching.
						</p>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<img src={matt1} className='img-fluid' />
						</div>
						<div className='col-lg-5 col-sm float-right myLinks'>
							<div className='col-lg-12'>
								<button type='button' class='btn btn-primary btn-lg'>
									Send Me a Message
								</button>
							</div>
							<a href='https://www.github.com'>
								<img src={github} className='social' />
							</a>

							<a href='https://www.linkedin.com'>
								<img src={linkedin} className='social' />
							</a>
							<a href='https://www.facebook.com'>
								<img src={facebook} className='social' />
							</a>
						</div>
						<hr className='my-4' />
					</div>
				</div>
			</div>
		);
	}
}
export default Jumbotron;
