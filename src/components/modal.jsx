import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { AppConsumer } from "../contexts/App";

class Modal extends Component {
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
    	console.log(this.props);
    	this.props.closeModal();
    }

    render() {
    	const { modalTitle, children } = this.props;
		
    	return (
    		<Fragment>
    			<div
    				className="modal fade show" 
    				tabIndex="-1" role="dialog"
    				style={{ display: "block" }}
    			>
    				<div className="modal-dialog modal-lg" role="document">
    					<div className="modal-content">
    						<div className="modal-header">
    							<h5 className="modal-title">{ modalTitle }</h5>
    							<button 
    								type="button" 
    								className="close" 
    								data-dismiss="modal" 
    								aria-label="Close"
    								onClick={this.close}
    							>
    								<span aria-hidden="true">&times;</span>
    							</button>
    						</div>
    						<div className="modal-body">
    							{children}
    						</div>
    					</div>
    				</div>
    			</div>
    			<div className="modal-backdrop fade show" />   
    		</Fragment>
    
    	);
    }
}

// export default Modal;

const withContext = () => (
	<AppConsumer>
		{(settings) => {
			return settings.showModal ? <Modal {...settings} /> : null;
		}}
	</AppConsumer>
);

export default withContext;