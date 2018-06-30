import React, { PureComponent } from "react";
import { Button } from "reactstrap";

class DogButton extends PureComponent {
	render() {
		//onClick={() => this.props.removePerson(id)}
		return (
			<div>
				<Button onClick={() => this.props.buttonClick(this.props.id)}>
					I like this Dog
				</Button>
			</div>
		);
	}
}

export default DogButton;
