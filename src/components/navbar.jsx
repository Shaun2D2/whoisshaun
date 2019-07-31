import React, { Component } from "react";
import { Link } from "react-scroll";

import Navbar from "react-bootstrap/Navbar";

class Nav extends Component {
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

		return "hello";

		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Nav;