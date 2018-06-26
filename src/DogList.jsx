import React, { Component } from "react";
import "./DogList.css";
import Dog from "./Dog.jsx";
import { Container, Row, Col } from "reactstrap";
import getDogs from "./getDogs";
import BottomScrollListener from "react-bottom-scroll-listener";
import shortid from "shortid";
import getBatchOfDogs from "./getBatchOfDogs";

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
						<BottomScrollListener
							onBottom={this.getBatchOfDogs.bind(this)}
							debounce={300}
						/>
						{this.renderDogs()}
					</Row>
				</Container>
			);
		}
	}
}

export default DogList;
