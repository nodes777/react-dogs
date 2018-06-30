function getBatchOfDogs() {
	let amountOfDogs = 12;
	let urls = [];

	// There's gotta be a better way to do this...
	for (var i = amountOfDogs - 1; i >= 0; i--) {
		urls.push("https://dog.ceo/api/breeds/image/random");
	}
	// map every url to the promise fetch
	let requests = urls.map(url => {
		return fetch(url);
	});

	// Promise.all waits until all jobs are resolved
	Promise.all(requests)
		.then(res => {
			return Promise.all(res.map(res => res.json()));
		})
		.then(res => {
			let arr = [];
			res.forEach(result => {
				let dogName = result.message.match("breeds.(.*)/")[1];
				//Uppercase the first letter
				dogName = dogName.charAt(0).toUpperCase() + dogName.slice(1);

				let dogImgUrl = result.message;
				let condition = false;

				arr.push({ dogImgUrl, dogName, condition });
			});
			return arr;
		})
		.then(arr => {
			this.setState({
				isLoaded: true,
				dogPicArr: [...this.state.dogPicArr, ...arr]
			});
		});
}

export default getBatchOfDogs;
