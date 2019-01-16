import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
	constructor(props) {
		super(props);
        
		this.state = {
			offset: 0
		};

		this.adjustoffset = this.adjustoffset.bind(this);

		window.addEventListener("scroll", this.adjustoffset);
	}

	adjustoffset() {
		this.setState({ offset: window.pageYOffset });
	}

	render() {
		const { offset } = this.state;

		return (
			<div className={`navbar navbar-expand-lg navbar-dark fixed-top ${offset > 50 ? "navbar-shrink" : ""}`} id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="#page-top">Shaun Lobsinger</a>
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
						<i className="fas fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav text-uppercase ml-auto">
							<li className="nav-item">
								<Link 
									to="hello"
									className="nav-link nav-link--pointer js-scroll-trigger"
									smooth
								>
									My Story
								</Link>
							</li>
							<li className="nav-item">
								<Link 
									to="stack"
									className="nav-link nav-link--pointer js-scroll-trigger"
									smooth
								>
										My Stack
								</Link>
							</li>
							<li className="nav-item">
								<Link 
									to="experience"
									className="nav-link nav-link--pointer js-scroll-trigger"
									smooth
								>
										My Experience
								</Link>
							</li>
							<li className="nav-item">
								<Link 
									to="portfolio"
									className="nav-link nav-link--pointer js-scroll-trigger"
									smooth
								>
										My Projects
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="assets/resume.docx">Resume</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;