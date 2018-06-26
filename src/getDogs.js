function getDogs() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(res => res.json())
		.then(
			result => {
				// Get the name of the breed from the url
				let dogName = result.message.match("breeds.(.*)/")[1];
				//Uppercase the first letter
				dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1);

				let dogImgUrl = result.message;

				return { dogImgUrl, dogName };

				// this.setState({
				// 	isLoaded: true,
				// 	dogPicArr: [...this.state.dogPicArr, { dogImgUrl, dogName }]
				// });
			},
			error => {
				return { error };
				// this.setState({
				// 	isLoaded: true,
				// 	error
				// });
			}
		);
}
//}

export default getDogs;
