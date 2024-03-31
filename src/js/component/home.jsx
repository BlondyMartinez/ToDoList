import React from "react";
import Note from "./note"

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<h1 className="text-center mt-5">todos</h1>
			<Note />
		</div>
	);
};

export default Home;
