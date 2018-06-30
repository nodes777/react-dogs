import React, { Component } from "react";
import { Container, Row } from "reactstrap";

import BottomScrollListener from "react-bottom-scroll-listener";
import shortid from "shortid";
import getBatchOfDogs from "./getBatchOfDogs";
import getDogs from "./getDogs";
import DogCard from "./DogCard.jsx";

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
		this.likeDog = this.likeDog.bind(this);
	}
	componentDidMount() {
		this.getBatchOfDogs();
	}

	likeDog(id) {
		console.log("dogLiked: " + id);
		// Make a copy of state
		let newState = Object.assign({}, this.state);
		// Change the specific property
		newState.dogPicArr[id].condition = !this.state.dogPicArr[id].condition;
		// Set the state again
		this.setState(newState);
	}
	renderDogs() {
		// Render all of the dogs by mapping over and creating a new Dog Component for each one
		//using shortid.generate() for key causes a whole rerender
		return this.state.dogPicArr.map((dogObj, index) => (
			<DogCard
				key={index}
				id={index}
				imgSrc={dogObj.dogImgUrl}
				dogName={dogObj.dogName}
				condition={dogObj.condition}
				buttonClick={this.likeDog}
			/>
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
							offset={400}
						/>
						{this.renderDogs()}
					</Row>
				</Container>
			);
		}
	}
}

export default DogList;
