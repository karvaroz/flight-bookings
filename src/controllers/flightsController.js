import axios from "axios";

export const getAllAirplanes = async (country) => {
	try {
		const GET_AIRPLANES = `https://ih7tusxmha.execute-api.us-east-1.amazonaws.com/dev/api/v1/countries/${country}`;
		const response = await axios.get(GET_AIRPLANES);
		return response.data.data;
	} catch (error) {
		alert(error);
	}
};

export const getAllFlights = async (country) => {
	try {
		const GET_ALL_FLIGHTS = `https://ih7tusxmha.execute-api.us-east-1.amazonaws.com/dev/api/v1/countries/${country}/flights`;
		const response = await axios.get(GET_ALL_FLIGHTS);
		return response.data.data;
	} catch (error) {
		alert(error);
	}
};

export const getFlightById = async (country, flightId) => {
	try {
		const GET_FLIGHT_BY_ID = `https://ih7tusxmha.execute-api.us-east-1.amazonaws.com/dev/api/v1/countries/${country}/flights/${flightId}`;
		const response = await axios.get(GET_FLIGHT_BY_ID);
		return response.data.data;
	} catch (error) {
		alert(error);
	}
};
