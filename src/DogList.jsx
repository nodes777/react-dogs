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
					console.log(dogName);
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
		// Render all of the greetings by mapping over and creating a new HelloWorld Component for each one
		return this.state.dogPicArr.map(dogObj => (
			// key defines an id-like thing
			<Col md={4}>
				<Dog
					key={dogObj.dogName}
					imgSrc={dogObj.dogImgUrl}
					dogName={dogObj.dogName}
				/>
			</Col>
		));
	}
	render() {
		const { error, isLoaded, dogPicSrc } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			//return <div className="DogList row">{this.renderDogs()}</div>;
			return (
				<Container>
					<Row>{this.renderDogs()}</Row>
				</Container>
			);
		}
	}
}

export default DogList;
