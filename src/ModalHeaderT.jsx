import React, { Component } from "react";
import { ModalHeader } from "reactstrap";

class ModalHeaderT extends Component {
	render() {
		return (
			<ModalHeader toggle={this.toggle}>{this.props.dogName}</ModalHeader>
		);
	}
}

export default ModalHeaderT;
