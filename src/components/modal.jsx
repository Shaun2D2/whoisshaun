import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import { AppConsumer } from "../contexts/App";

class ProjectModal extends Component {
    static propTypes = {
    	title: PropTypes.string,
    	children: PropTypes.node,
    }

    constructor(props) {
    	super(props);

    	document.getElementsByTagName("body")[0].classList.add("modal-open");
		
    	this.close = this.close.bind(this);
    }
	
    componentWillUnmount() {
    	document.getElementsByTagName("body")[0].classList.remove("modal-open");
    }
	
    close() {
    	this.props.closeModal();
    }

    render() {
    	const { modalTitle, modalBody, modalImg } = this.props;
		
    	return (
    		<Modal show={true} onHide={null}>
    			<Modal.Header closeButton>
			  <Modal.Title>Modal heading</Modal.Title>
    			</Modal.Header>
    			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    			<Modal.Footer>
			  <Button variant="secondary" onClick={null}>
				Close
			  </Button>
			  <Button variant="primary" onClick={null}>
				Save Changes
			  </Button>
    			</Modal.Footer>
		  </Modal>    	);
    }
}

// export default Modal;

const withContext = () => (
	<AppConsumer>
		{(settings) => {
			return settings.showModal ? <ProjectModal {...settings} /> : null;
		}}
	</AppConsumer>
);

export default withContext;