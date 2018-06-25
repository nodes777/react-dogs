import React, { Component } from "react";
import "./Dog.css";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

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
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>This is a great dog</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Dog;
