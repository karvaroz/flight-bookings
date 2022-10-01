import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Booking from "./pages/Booking";
import Home from "./pages/Home";
import List from "./pages/List";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/booking"
					element={<Booking />}
				/>
				<Route
					path="/list-bookings"
					element={<List />}
				/>
				<Route
					path="/*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
