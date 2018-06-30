import React, { PureComponent } from "react";
import { Row, Col } from "reactstrap";

import Dog from "./Dog.jsx";

import "./DogList.css";
import "./Dog.css";

class DogCard extends PureComponent {
	render() {
		let { imgSrc, dogName, id, condition, buttonClick } = this.props;
		return (
			<Col md="3">
				<Row>
					<div className={condition ? "fill" : "notFill"} />
				</Row>
				<Dog
					imgSrc={imgSrc}
					dogName={dogName}
					buttonClick={buttonClick}
					id={id}
				/>
			</Col>
		);
	}
}

export default DogCard;
