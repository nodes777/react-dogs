import React from "react";
import "./App.css";
import Header from "./Header";
import DogList from "./DogList";

const App = () => {
	return (
		<div className="App">
			<Header />
			<DogList />
		</div>
	);
};

export default App;
