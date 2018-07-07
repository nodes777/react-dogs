import React, { PureComponent } from "react";
import DogButton from "./DogButton";
import "./Dog.css";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import DogModal from "./DogModal";

class Dog extends PureComponent {
	render() {
		return (
			<div className="onTop">
				<Card>
					<DogModal
						dogName={this.props.dogName}
						imgSrc={this.props.imgSrc}
					/>
					<CardBody>
						<CardTitle>{this.props.dogName}</CardTitle>
						<CardText>This is a great dog</CardText>
						<DogButton
							id={this.props.id}
							condition={this.props.condition}
							buttonClick={this.props.buttonClick}
							dogName={this.props.dogName}
							imgSrc={this.props.imgSrc}
						/>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default Dog;
