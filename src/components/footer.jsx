import React from "react";
import moment from "moment";

const Footer = () => (
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<span className="copyright">Copyright &copy; Shaun Lobsinger {moment().format("YYYY")}</span>
				</div>
				<div className="col-md-4">
					<ul className="list-inline social-buttons">
						<li><a href="https://www.linkedin.com/in/shaun-lobsinger-b4098066"><i className="fa fa-linkedin"></i></a></li>
						<li><a href="https://twitter.com/Shaun2D2"><i className="fa fa-twitter"></i></a></li>
						<li><a href="https://github.com/Shaun2D2"><i className="fa fa-github"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;