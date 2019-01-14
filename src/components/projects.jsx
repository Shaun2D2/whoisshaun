import React from "react";

import config from "../config/projects";

const Projects = () => (
	<div className="row">
		{config.map((item, index) => (
			<div className="col-md-4 col-sm-6 portfolio-item" key={`project-${index}`}>
				<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
					<div className="portfolio-hover">
						<div className="portfolio-hover-content">
							<i className="fas fa-plus fa-3x"></i>
						</div>
					</div>
					<img className="img-fluid" src={`assets/${item.image}`} alt="" />
				</a>
				<div className="portfolio-caption">
					<h4>{item.title}</h4>
					<p className="text-muted">{item.short}</p>
				</div>
			</div>
		
		))}
	</div>
);

export default Projects;