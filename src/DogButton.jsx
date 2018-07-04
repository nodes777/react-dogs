import React, { PureComponent } from "react";
import { Button } from "reactstrap";
import DogModal from "./DogModal";

class DogButton extends PureComponent {
	render() {
		return (
			<div>
				<Button
					style={{ backgroundColor: "green" }}
					aria-label={"Dog Liked: " + this.props.condition}
					onClick={() => this.props.buttonClick(this.props.id)}
				>
					I Like This Dog
				</Button>
				<DogModal buttonLabel="Yay" dogName={this.props.dogName} />
			</div>
		);
	}
}

export default DogButton;
