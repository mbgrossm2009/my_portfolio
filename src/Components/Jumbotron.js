import React, { Component } from 'react';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import matt1 from '../images/Matt1.jpg';

class Jumbotron extends Component {
	render() {
		return (
			<div className='jumbotron'>
				<div className='container'>
					{/* Top of Jumboton Start */}
					<div className='col-lg-12 row'>
						<h1 className='display-6'>Welcome to my Portfolio!</h1>
						<p className='lead'>
							Hi, I’m Matt Grossman. I bring 18 years of leadership experience in retail management and
							am now focused on building a career in technology. I’m passionate about solving problems,
							improving processes, and delivering high-quality solutions. I have hands-on experience with
							JavaScript, ReactJS, Ruby on Rails, HTML5, and CSS, and I continually expand my skills
							through online courses, collaborations, and self-directed projects. I’m a fast learner with
							strong analytical skills and a proven work ethic, eager to contribute to innovative web
							development or quality assurance projects while continuing to grow as a developer.
						</p>
					</div>
				</div>

				{/* Top of JumboTron End*/}

				{/*JumboTron Bottom Start */}
				<div className='container'>
					<div className='jumbotronBottom row'>
						{/*Picture of me */}
						<div className='col-lg-6'>
							<img src={matt1} className=' myPic img-fluid' alt='Matt Grossman' />
						</div>
						{/* Picture of me end */}

						<div className='col-lg-6 col-sm myLinks'>
							{/*Resume Start */}
							<section className='resume w-50 p-3  col-lg-6 col-md'>
								<a
									href='/Matthew_Grossman_Resume.pdf'
									download='/Matthew_Grossman_Resume'
									className='download_link'
								>
									Download My Resume Here
								</a>
							</section>

							{/*Resume End */}
							{/*Social Media Links Start */}
							<div className='socialMedia_links col-lg-12 '>
								<a href='https://www.linkedin.com/in/matt-grossman/'>
									<img src={linkedin} className='social' alt='Facebook' />
								</a>
								<a href='https://www.facebook.com/matt.grossman.18'>
									<img src={facebook} className='social' alt='Facebook' />
								</a>
								<a href='https://github.com/mbgrossm2009'>
									<img src={github} className='social' alt='github' />
								</a>
							</div>
							{/*Social Media Links End */}
						</div>
						<hr className='my-4' />
					</div>
				<div className = "job col-lg-12">
					<div className = ""><h1 >Projects</h1></div>
					<h2><a href = "https://commander-app.vercel.app"> MTG: Commander Deck Builder </a></h2>
					<h5><a href = "https://github.com/mbgrossm2009/commander-app">Github Link </a> </h5>
					</div>
				</div>
				{/* JumboTron Bottom End*/}
			</div>
		);
	}
}
export default Jumbotron;
