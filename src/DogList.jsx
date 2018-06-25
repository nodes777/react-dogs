import React, { Component } from "react";
import "./DogList.css";
import Dog from "./Dog.jsx";
import { Container, Row, Col } from "reactstrap";

class DogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			dogPicArr: []
		};
	}

	componentDidMount() {
		let numOfInitialDogs = 12;
		for (let i = 0; i < numOfInitialDogs; i++) {
			this.getStuff();
		}
	}

	getStuff() {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then(res => res.json())
			.then(
				result => {
					// Get the name of the breed from the url
					let dogName = result.message.match("breeds.(.*)/")[1];
					//Uppercase the first letter
					dogName =
						dogName.charAt(0).toUpperCase() + dogName.slice(1);

					let dogImgUrl = result.message;

					this.setState({
						isLoaded: true,
						dogPicArr: [
							...this.state.dogPicArr,
							{ dogImgUrl, dogName }
						]
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	renderDogs() {
		// Render all of the dogs by mapping over and creating a new Dog Component for each one
		return this.state.dogPicArr.map(dogObj => (
			// key defines an id-like thing
			<Col md="4">
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
					<Row>{this.renderDogs()}</Row>
				</Container>
			);
		}
	}
}

export default DogList;
