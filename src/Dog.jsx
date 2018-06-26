import React, { Component } from "react";
import DogButton from "./DogButton";
import "./Dog.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dog extends Component {
	render() {
		return (
			<div>
				<Card>
					<CardImg
						top
						width="100%"
						src={this.props.imgSrc}
						alt="Dog Pic"
					/>
					<CardBody>
						<CardTitle>{this.props.dogName}</CardTitle>
						<CardText>This is a great dog</CardText>
						<DogButton />
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Dog;
