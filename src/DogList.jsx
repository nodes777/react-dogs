import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import BottomScrollListener from "react-bottom-scroll-listener";
import shortid from "shortid";
import getBatchOfDogs from "./getBatchOfDogs";
import getDogs from "./getDogs";
import Dog from "./Dog.jsx";

import "./DogList.css";
import "./Dog.css";

class DogList extends Component {
	constructor(props) {
		super(props);
		this.getDogs = getDogs.bind(this);
		this.getBatchOfDogs = getBatchOfDogs.bind(this);
		this.state = {
			error: null,
			isLoaded: false,
			dogPicArr: []
		};
	}

	componentDidMount() {
		this.getBatchOfDogs();
	}

	renderDogs() {
		// Render all of the dogs by mapping over and creating a new Dog Component for each one
		return this.state.dogPicArr.map((dogObj, index) => (
			<Col key={shortid.generate()} md="3">
				<div className="fill" />
				<Dog imgSrc={dogObj.dogImgUrl} dogName={dogObj.dogName} />
			</Col>
		));
	}
	render() {
		const { error, isLoaded } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading those dogs...</div>;
		} else {
			return (
				<Container fluid>
					<Row>
						{/*// This should go within render dogs?
						so a new BottomScrollListener is created at the end of a new row?*/}
						<BottomScrollListener
							onBottom={this.getBatchOfDogs.bind(this)}
							offset={800}
						/>
						{this.renderDogs()}
					</Row>
				</Container>
			);
		}
	}
}

export default DogList;
