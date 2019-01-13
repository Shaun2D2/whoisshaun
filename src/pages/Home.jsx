import React, { Fragment } from "react";

import Timeline from "../components/timeline";

const Home = () => (
	<Fragment>
		<header className="masthead">
			<div className="container">
				<div className="intro-text">
					<div className="intro-lead-in">It's nice to meet you!</div>
					<div className="intro-heading text-uppercase">I'm Shaun</div>
					<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Meet me</a>
				</div>
			</div>
		</header>

		<section id="hello" className="bg-light-gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading">Hey there!</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4 col-sm-offset-4">
						<div className="team-member">
							<img src="img/me.jpg" className="img-responsive img-circle" alt="" />
							<br />
							<ul className="list-inline social-buttons">
								<li><a href="https://www.linkedin.com/in/shaun-lobsinger-b4098066"><i className="fa fa-linkedin"></i></a>
								</li>
								<li><a href="https://twitter.com/Shaun2D2"><i className="fa fa-twitter"></i></a>
								</li>
								<li><a href="https://github.com/Shaun2D2"><i className="fa fa-github"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2">

						<p className="large text-muted">I’m <strong>Shaun Lobsinger</strong>, a passionate web developer and UX designer, who’s looking for exciting opportunities to help clients create or refine their web products. I possess skills composed of a formal education in Human Factors (MS 2015) with over 3 years of experience as a professional web developer.</p>

						<p className="large text-muted">My stack currently focuses on PHP and the Laravel framework with the use of Bootstrap, jQuery, Vue.js and SASS for my front end.  I enjoy working with front and back end technology and am excited about learning new skills.</p>

						<p className="large text-muted">My most recent work has brought major positive changes to Arizona Federal Credit Union, where I rebuilt the entire development workflow. I introduced GIT & BitBucket Server to the organization. I also created a CI pipeline through the use of Bamboo server to provide quick and easy testing, builds, and deployments. I worked hard to migrate from Adobe Cold Fusion to PHP which provided a standardized framework for development with Laravel 5.</p>

						<p className="large text-muted">Whether it’s developing a new web product or creating wireframes for the newest project, I’m up for any challenge and love adding new skills to my repertoire!</p>

					</div>
				</div>
			</div>
		</section>

		<section id="experience">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading">My Experience</h2>
						<h3 className="section-subheading text-muted">What i've been up to.</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Timeline />
					</div>
				</div>
			</div>
		</section>

		<section id="portfolio" className="bg-light-gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading">Featured Work</h2>
						<h3 className="section-subheading text-muted">Here is a sample of my projects</h3>
					</div>
				</div>
                project cards here...
			</div>
		</section>
	</Fragment>
);

export default Home;