import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { Toast } from "../utils/toast";

export const createNewItem = async (item) => {
	try {
		await addDoc(collection(db, "bookings"), {
			name: item.name,
			lastname: item.lastname,
			identification: item.identification,
			email: item.email,
			flightBooked: item.flightBooked,
		});
		Toast.fire({
			icon: "success",
			title: "Flight Booked",
		});
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ "
		});
	}
};

export const getBookins = async (state) => {
	try {
		const querySnapshot = await getDocs(collection(db, "bookings"));
		const books = [];
		querySnapshot.forEach((book) => {
			books.push({
				data: book.data(),
				id: book.id,
			});
		});
		state(books);
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ ",
		});
	}
};
