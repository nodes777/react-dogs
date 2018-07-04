import React, { PureComponent } from "react";
import DogButton from "./DogButton";
import "./Dog.css";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dog extends PureComponent {
	render() {
		return (
			<div className="onTop">
				<Card>
					<CardImg
						top
						width="100%"
						src={this.props.imgSrc}
						alt={this.props.dogName}
					/>
					<CardBody>
						<CardTitle>{this.props.dogName}</CardTitle>
						<CardText>This is a great dog</CardText>
						<DogButton
							id={this.props.id}
							condition={this.props.condition}
							buttonClick={this.props.buttonClick}
							dogName={this.props.dogName}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Dog;
