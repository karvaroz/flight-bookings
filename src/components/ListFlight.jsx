import { Fragment } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const ListFlight = ({ flights }) => {
	const navigate = useNavigate();
	const handleBooking = (info) => {
		localStorage.setItem("flightId", JSON.stringify(info.id));
		navigate("/booking");
	};

	return (
		<Fragment>
			{flights?.map((flight, idx) => (
				<div
					className="list_container"
					key={idx}>
					<div className="list_left">
						<ion-icon
							name="airplane-outline"
							size="large"></ion-icon>
						<div className="list_hours">
							<h3>
								{format(new Date(flight.arrivalAt), "hh:mm a")} -
								{format(new Date(flight?.departureAt), "hh:mm a")}
							</h3>
							<p>{flight.departureIata}</p>
						</div>
					</div>
					<div className="list_right">
						<div className="time">
							<h3>{flight.duration}</h3>
							<p>{flight.arrivalTerminal}</p>
						</div>
						<div className="number">
							<p>Number stops</p>
							<h3>{flight.numberOfStops}</h3>
						</div>
						<div className="flight_code">
							<p>Flight code</p>
							<h3>{flight.carrierCode}</h3>
						</div>
						<div className="airplaine">
							<h3>{flight.departureTerminal}</h3>
						</div>
						<ion-icon
							name="chevron-forward-circle-outline"
							size="large"
							id={flight.id}
							value={flight.id}
							onClick={() => handleBooking(flight)}></ion-icon>
					</div>
				</div>
			))}
		</Fragment>
	);
};

export default ListFlight;
