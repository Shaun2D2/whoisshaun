import React from "react";

const Timeline = () => (
	<ul className="timeline">
		<li className="timeline-inverted">
			<div className="timeline-image"><h4>GoDaddy</h4></div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2017 - Present</h4>
					<h4 className="subheading">Software Engineer</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">
						I joined the GoDaddy team to help empower small businesses entrepreneurs.  
						My work has helped millions of customer manage their email from a simple interface.  
						More recently I'm helping web pros manage their customers through <a href="https://hub.godaddy.com" target="_blank">GoDaddy Hub</a>.
					</p>
				</div>
			</div>
		</li>
		<li>
			<div className="timeline-image">
				<h4>Arizona Federal</h4>
			</div>
			<div className="timeline-panel">
				<div className="timeline-heading">
					<h4>2013 - 2017</h4>
					<h4 className="subheading">Sr. Web Developer</h4>
				</div>
				<div className="timeline-body">
					<p className="text-muted">
						My role at Arizona Federal focused on full stack development, Linux server management, and UX design.  
						As the senior web developer for the organization, I was responsible for collecting project requirements, implementing new work flows, writing code and consulting internal stakeholders.</p>
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
					<p className="text-muted">
						As Quality Analyst I was tasked with maintaining existing web based products to assist employees.  
						My responsibilities also included developing new products as needed by the business.
					</p>
				</div>
			</div>
		</li>
	</ul>
);

export default Timeline;