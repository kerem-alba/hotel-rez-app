import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { firebaseApp } from "../config/firebaseConfig";
import { Hotel } from "../utils/types";

const db = getFirestore(firebaseApp);

export const addHotel = async (hotelData: Hotel) => {
  try {
    const docRef = await addDoc(collection(db, "hotels"), hotelData);
    console.log("Hotel added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding hotel: ", error);
    throw error;
  }
};

export const fetchHotels = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "hotels"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching hotels: ", error);
    throw error;
  }
};
