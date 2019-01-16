import React from "react";

const Timeline = () => (
	<ul className="timeline">
		<li className="timeline-inverted">
			<div className="timeline-image"><h4>GE Money</h4></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2012 - 2013</h4>
					<h4 className="subheading">Quality Analyist</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">As Quality Analyst I was tasked with maintaining existing web based products to assist employees.  My responsibilities also included developing new products as needed by the business.  For example, I created a note tracking application to help managers and Quality Specialists keep record of previous coaching sessions.</p>
					<br  />
					<p className="text-muted">My responsibilities also included conducting redundant call monitoring, coaching employees, and reporting.</p>
				</div>
			</div>
		</li>
		<li>
			<div className="timeline-image">
				<h4>Arizona Federal</h4>
			</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2013 - 2016</h4>
					<h4 className="subheading">Sr. Web Developer</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">My role at Arizona Federal focused on full stack development, Linux server management, and UX design.  As the senior web developer for the organization, I was responsible for collecting project requirements, implementing new work flows, writing code and consulting internal stakeholders.</p>
					<br  />
					<p className="text-muted">Some of my major achievements include relaunching ArizonaFederal.org with a modern look and feel, launching an online membership application, and establishing a CI/CD pipeline for continous deployment.</p>
				</div>
			</div>
		</li>
		<li className="timeline-inverted">
			<div className="timeline-image"><h4>GoDaddy</h4></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2016 - Present</h4>
					<h4 className="subheading">Software Engineer</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">I joined Go Daddy to help entrepreneurs bring their dreams to life.  Primarily my work focuses on helping customer manage their email products with a proprietary control panel.  Within the application, a user is able to provision and manage their email accounts in one convenient place.  Some of my major achievements include assisting with migrating our application from an old version of Ember to React, launching a new email product, and providing an API to allow 3rd party application to activate credits without leaving their experience.</p>
				</div>
			</div>
		</li>
		<li className="timeline-inverted">
			<div className="timeline-image">
				<h4>Your Company Next?</h4>
			</div>
		</li>
	</ul>
);

export default Timeline;