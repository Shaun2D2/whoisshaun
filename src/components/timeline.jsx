import React from "react";

const Timeline = () => (
	<ul className="timeline">
		<li>
			<div className="timeline-image"><h4>GE Money</h4></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2011 - 2012</h4>
					<h4 className="subheading">Quality Specialist</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">As a Quality Specialist, I was responsible for listening and assessing the quality of call center employee interactions with customers.  Monthly completion of assigned call goals was routine, while providing assistance to team members.  I also provided improvement coaching for employees not able to meet an acceptable quality score. I frequently applied coaching skills to assist with new hire training classNamees.</p>
				</div>
			</div>
		</li>
		<li className="timeline-inverted">
			<div className="timeline-image"><h4>GE Money</h4></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2012 - 2013</h4>
					<h4 className="subheading">Quality Analyist</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">With my promotion to Quality Analyst, I was tasked with maintaining existing web based products to assist call center employees.  I also created new products based on call center needs.  One example was a notes tracking application to help managers and Quality Specialists keep track of previous coaching sessions.</p>
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
					<h4>2013 - present</h4>
					<h4 className="subheading">Sr. Web Developer</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">My role at the credit union focuses on full stack development, Linux server management, and user experience design.  Acting as the sole web developer for the organization, I am responsible for collecting project requirements, creating work flows, developing prototypes, coding product and presenting solutions to our stakeholders.</p>
					<br  />
					<p className="text-muted">I introduced GIT to the organization as well as implemented BitBucket Server and Bamboo Server to provide a complete CI pipeline. I have worked on several business critical applications, including two major redesigns of arizonafederal.org, an online membership application, and an online quiz game to coincide with an internet reality show.</p>
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