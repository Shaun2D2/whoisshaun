import React, { Component } from "react";

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
								<a className="nav-link js-scroll-trigger" href="#hello">Meet Shaun</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#experience">My Experience</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#portfolio">Featured Work</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#team">Resume</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;