import React, { Fragment } from "react";

import Timeline from "../components/timeline";

const Home = () => (
	<Fragment>
		<header className="masthead">
			<div className="container">
				<div className="intro-text">
					<div className="intro-lead-in">It&rsquo;s nice to meet you!</div>
					<div className="intro-heading text-uppercase">I&rsquo;m Shaun</div>
					<a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Meet me</a>
				</div>
			</div>
		</header>

		<section id="hello" className="bg-light-gray">
			<div className="container">
				<div className="row">
					<div className="col-sm-4 offset-sm-4">
						<div className="team-member">
							<img src="img/me.jpg" className="img-responsive img-circle" alt="" />
							<br />
							<ul className="list-inline social-buttons">
								<li className="list-inline-item">
									<a href="https://www.linkedin.com/in/shaun-lobsinger-b4098066"><i className="fab fa-linkedin-in" /></a>
								</li>
								<li className="list-inline-item">
									<a href="https://github.com/Shaun2D2"><i className="fab fa-github-alt" /></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<p className="large text-muted">Hey there! I&rsquo;m <strong>Shaun</strong>, a passionate web developer and user experience advocate who is always looking for new and exciting opportunities. My degree in Human Factors (MS 2015) and over 5 years experience with software development provide a unique balance of technical and UX insights.</p>
						<p className="large text-muted">I have experience with several modern languages such as Node.js, PHP, and React.  Feel free to look over some of my projects below.</p>
						<p className="large text-muted">My most recent work has been at GoDaddy, the worlds largest domain registrar where I work on their Office 365 reseller team.  I&rsquo;ve contributed to several large initives including integrating other GoDaddy products into our activation workflow and migrating our front end application from Ember to React.</p>
						<p className="large text-muted">Whether it&rsquo;s developing a new web product or creating wireframes for the newest project, I&rsquo;m up for any challenge and love to learn more!</p>
					</div>
				</div>
			</div>
		</section>

		<section id="services">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading text-uppercase">My Stack</h2>
						<h3 className="section-subheading text-muted">Here is a sample of the tech I typically work with.</h3>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fas fa-circle fa-stack-2x text-primary" />
							<i className="fab fa-node-js fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Backend</h4>
						<p className="text-muted">In the past I&rsquo;ve used <a href="https://secure.php.net/">PHP</a> or <a href="https://www.adobe.com/products/coldfusion-enterprise.html">ColdFusion</a> to power my backend, however, I&rsquo;ve switched to mostly using <a href="https://nodejs.org/en/">Node.js</a> thanks to its rising popularity and incredibly diverse ecosystem.</p>
					</div>
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fas fa-circle fa-stack-2x text-primary"></i>
							<i className="fab fa-react fa-stack-1x fa-inverse" />
						</span>
						<h4 className="service-heading">Frontend</h4>
						<p className="text-muted"><a href="https://reactjs.org/">React</a> and <a href="https://redux.js.org/">Redux</a> is my go to frameworks to manage frontend UI and state.  I&rsquo;ve also implement other popular packages such as <a href="https://momentjs.com/">moment.js</a>, <a href="https://lodash.com/">lodash</a>, and <a href="https://getbootstrap.com/">bootstrap</a>.</p>
					</div>
					<div className="col-md-4">
						<span className="fa-stack fa-4x">
							<i className="fas fa-circle fa-stack-2x text-primary"></i>
							<i className="fab fa-sass fa-stack-1x fa-inverse"></i>
						</span>
						<h4 className="service-heading">Build</h4>
						<p className="text-muted">I use modern build tools such as <a href="https://webpack.js.org/">Webpack</a> in my workflow.  Along with other goodies like <a href="https://eslint.org/">eslint</a> and <a href="https://babeljs.io/">babel</a> I can create powerful application quickly.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="experience">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h2 className="section-heading">My Experience</h2>
						<h3 className="section-subheading text-muted">What i&rsquo;ve been up to.</h3>
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