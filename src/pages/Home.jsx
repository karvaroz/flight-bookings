import { useEffect, useState } from "react";

import ListFlight from "../components/ListFlight";
import Navbar from "../components/Navbar";

import { getAllFlights } from "../controllers/flightsController";

const Home = () => {
	const [flights, setflights] = useState([]);

	useEffect(() => {
		getAllFlights("bo").then((response) => setflights(response));
	}, []);

	return (
		<div className="home_container">
			<Navbar />
			{flights ? <ListFlight flights={flights} /> : <h2>Loading ... </h2>}
		</div>
	);
};

export default Home;
