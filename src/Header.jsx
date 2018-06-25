import React, { Component } from "react";

class Header extends Component {
	render() {
		var text = "Dogs Dogs Dogs Dogs Dogs";
		var canvas = document.createElement("canvas");
		var fontSize = 22;
		canvas.setAttribute("height", fontSize + 5);
		var context = canvas.getContext("2d");
		context.fillStyle = "rgba(0,0,0,0.1)";
		context.font = fontSize + "px sans-serif";
		context.fillText(text, 0, fontSize);

		document.getElementById("root").style.backgroundImage =
			"url(" + canvas.toDataURL("image/png") + ")";

		return <h1> Dogs Dogs Dogs</h1>;
	}
}

export default Header;
