import React from "react";

const Projects = () => (
	<div className="row">
		<div className="col-md-4 col-sm-6 portfolio-item">
			<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
				<div className="portfolio-hover">
					<div className="portfolio-hover-content">
						<i className="fas fa-plus fa-3x"></i>
					</div>
				</div>
				<img className="img-fluid" src="assets/airzona-federal-join.png" alt="" />
			</a>
			<div className="portfolio-caption">
				<h4>Threads</h4>
				<p className="text-muted">Illustration</p>
			</div>
		</div>
	</div>
);

export default Projects;