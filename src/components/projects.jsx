import React, { Component, Fragment } from "react";

import Modal from "../components/modal";
import config from "../config/projects";

import { AppConsumer } from "../contexts/App";

class Projects extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeProject: null
		};

		this.launchModal = this.launchModal.bind(this);
	}

	launchModal(id) {
		const project = config.find(item => item.id === id);

		this.props.displayModal(
			project.title,
			project.description,
			project.image,
		);
	}

	render() {
		return (
			<Fragment>
				<div className="row">
					{config.map((item, index) => (
						<div className="col-md-4 col-sm-6 portfolio-item" key={`project-${index}`} onClick={ () => this.launchModal(item.id)}>
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
			</Fragment>
		);
	}
}

const withContext = () => (
	<AppConsumer>
		{(settings) => <Projects {...settings} />}
	</AppConsumer>
);


export default withContext;