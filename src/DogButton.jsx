import React, { PureComponent } from "react";
import { Button } from "reactstrap";

class DogButton extends PureComponent {
	render() {
		return (
			<div>
				<Button
					aria-label={"Dog Liked: " + this.props.condition}
					onClick={() => this.props.buttonClick(this.props.id)}
				>
					I Like This Dog
				</Button>
			</div>
		);
	}
}

export default DogButton;
