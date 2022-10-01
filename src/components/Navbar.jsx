import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<Link to="/">
				<ion-icon
					name="airplane-outline"
					size="large"></ion-icon>
			</Link>

			<br />
			<Link to="/">
				<h3>FLIGHTS</h3>
			</Link>

			<br />
			<Link to="/list-bookings">
				<h3>BOOKINGS LIST</h3>
			</Link>
		</nav>
	);
};

export default Navbar;
