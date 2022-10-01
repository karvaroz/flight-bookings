import { Fragment, useEffect, useState } from "react";
import { format } from "date-fns";

import Navbar from "../components/Navbar";

import { getFlightById } from "../controllers/flightsController";
import { useForm } from "../hooks/useForm";
import { createNewItem } from "../controllers/bookingController";
import { useNavigate } from "react-router-dom";
import { Toast } from "../utils/toast";

const Booking = () => {
	const flightId = JSON.parse(localStorage.getItem("flightId"));
	const [flightChoosed, setFlightChoosed] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		getFlightById("bo", flightId).then((response) =>
			setFlightChoosed(response)
		);
	}, [flightId]);

	const [values, handleInputChange, reset] = useForm({
		name: "",
		lastname: "",
		identification: "",
		email: "",
		flightBooked: flightId,
	});
	const { name, lastname, identification, email, flightBooked } = values;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			values.name === "" &&
			values.identification === "" &&
			values.email === "" &&
			values.lastname === ""
		) {
			Toast.fire({
				icon: "info",
				title: "Please enter a correct values",
			});
		} else {
			createNewItem(values);
			reset();
			navigate("/");
			setTimeout(() => {
				localStorage.clear();
			}, 2000);
		}
	};
	return (
		<Fragment>
			{flightChoosed && (
				<div className="booking">
					<Navbar />
					<div className="flight_details">
						<h3>BOOKING</h3>
						<hr />
						<p>Terminal: {flightChoosed && flightChoosed?.departureTerminal}</p>
						<hr />
						<p>Flight Number: {flightChoosed && flightChoosed?.number}</p>
						<hr />
						<p>
							{flightChoosed &&
								format(
									new Date(flightChoosed.arrivalAt || new Date()),
									"hh:mm a"
								)}{" "}
							-
							{flightChoosed &&
								format(
									new Date(flightChoosed.departureAt || new Date()),
									"hh:mm a"
								)}
						</p>
						<hr />
						<p>
							Class Seats:{" "}
							{flightChoosed && flightChoosed?.availabilityClasses[0]?.class} -
							Price:{" "}
							{flightChoosed && flightChoosed?.availabilityClasses[0]?.price}
						</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form_group">
							<label htmlFor="name">Nombre</label>
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form_group">
							<label htmlFor="lastname">Apellido</label>
							<input
								type="text"
								name="lastname"
								id="lastname"
								value={lastname}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form_group">
							<label htmlFor="identification">ID</label>
							<input
								type="text"
								id="identification"
								name="identification"
								value={identification}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form_group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={handleInputChange}
							/>
						</div>
						<button type="submit">Checkout</button>
					</form>
				</div>
			)}
		</Fragment>
	);
};

export default Booking;
