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
					<p className="text-muted">As Quality Analyst I was tasked with maintaining existing web based products to assist call center employees.  My responsibilities also included creating new products based on business needs.  For example, I created a note tracking application to help managers and Quality Specialists keep record of previous coaching sessions.</p>
					<br  />
					<p className="text-muted">I was also responsible for conducting redundant call monitoring and coaching quality specialists to ensure interrater reliability and adherence to the quality cycle.  I led cross site calibration meetings to ensure all sites were in agreement with call scoring standards, while compiling monthly reports for management to show team’s effectiveness.</p>
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
					<p className="text-muted">My role at Arizona Federal focuses on full stack development, Linux server management, and UX design.  Acting as the sole web developer for the organization, I was responsible for collecting project requirements, creating work flows, developing prototypes, writing code and consulting internal stakeholders.</p>
					<br  />
					<p className="text-muted">Some of my major achievements include relaunching ArizonaFederal.org with a modern look and feel, launching an online membership application, introducing GIT version control, and implementing the first CI/CD pipeline for continous deployment through Atlassian Bamboo.</p>
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
					<p className="text-muted">My latest work with GoDaddy blah blah blah...</p>
					<br  />
					<p className="text-muted">I was also responsible for conducting redundant call monitoring and coaching quality specialists to ensure interrater reliability and adherence to the quality cycle.  I led cross site calibration meetings to ensure all sites were in agreement with call scoring standards, while compiling monthly reports for management to show team’s effectiveness.</p>
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