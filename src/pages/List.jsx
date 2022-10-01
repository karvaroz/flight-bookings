import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getBookins } from "../controllers/bookingController";

const List = () => {
	const [bookingList, setBookingaList] = useState([]);

	useEffect(() => {
		getBookins(setBookingaList);
	}, []);
	return (
		<div>
			<Navbar />
			<h3>Bookins List</h3>
			<hr />
			<div>
				{bookingList ? (
					bookingList.map((book) => (
						<li key={book.id}>
							Nombre: {book.data.name}- Apellido: {book.data.lastname}- Email:{" "}
							{book.data.email}- Flight: {book.data.flightBooked}
						</li>
					))
				) : (
					<h2>Loading ...</h2>
				)}
			</div>
		</div>
	);
};

export default List;
