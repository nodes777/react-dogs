function getWikiText(searchTerm) {
	fetch(
		//`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&origin=*&format=json&titles=${searchTerm}`
		//`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&exintro=&titles=${searchTerm}`
		//`http://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&explaintext=1&titles=${searchTerm} dog`
		//`http://en.wikipedia.org/w/api.php?format=json&action=query&list=prefixsearch&origin=*&prop=extracts&explaintext=1&pssearch=${searchTerm} dog`
		//`http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&origin=*&titles=${searchTerm}`
		`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&rvprop=content&search=${searchTerm}`
	)
		.then(res => res.json())
		.then(res => {
			console.log(res);
			console.log(res[0]);
			console.log(res[2][0]);
			// let title = res[1][0];
			// title = title.replace(/\s+/g, "_");
			// console.log(title);

			// console.log(res.query.pages);
			// console.log(res.query.pages.pageid);
			// let id = Object.keys(res.query.pages)[0];
			// console.log(id);
			// console.log(res.query.pages[id]);
			let fact = ''
			for(let i = 0; i<=res[2].length-1; i++){
				if(res[2][i].indexOf("dog") >=0){
					fact = res[2][i];
					console.log(fact)
				}
			}
			this.setState({
				wikiText: fact
			});
			//return title;
		})
		.then(title => {
			fetch(
				`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=revisions&rvprop=content&format=json&titles=${title}`
			)
				.then(res => res.json())
				.then(res => {
					console.log(res);
				});
		});
}

export default getWikiText;
