import { getFirestore, collection, addDoc, getDocs, query, limit, where, orderBy, startAt, endAt } from "firebase/firestore";
import { firebaseApp } from "../config/firebaseConfig";
import { Hotel } from "../utils/types";

const db = getFirestore(firebaseApp);

export const addHotel = async (hotelData: Hotel) => {
  try {
    const docRef = await addDoc(collection(db, "hotels"), hotelData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding hotel: ", error);
    throw error;
  }
};

export const fetchHotels = async () => {
  try {
    const hotelsQuery = query(collection(db, "hotels"), limit(10));
    const querySnapshot = await getDocs(hotelsQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Hotel[];
  } catch (error) {
    console.error("Error fetching hotels: ", error);
    throw error;
  }
};

export const fetchCities = async () => {
  try {
    const result: { id: string; city: string; cityImgUrl: string }[] = [];
    const citiesQuery = query(collection(db, "hotels"), orderBy("address.city"), limit(10));
    const citiesSnapshot = await getDocs(citiesQuery);

    citiesSnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const city = data?.address?.city;
      const cityImgUrl = data?.address?.cityImgUrl;

      if (city && cityImgUrl) {
        result.push({ id: doc.id, city, cityImgUrl });
      }
    });
    return result;
  } catch (error) {
    console.error("Error fetching cities: ", error);
    throw error;
  }
};

export const fetchAreasByPrefix = async (prefix: string): Promise<{ id: string; city: string; country: string }[]> => {
  try {
    const result: { id: string; city: string; country: string }[] = [];
    const cityQuery = query(collection(db, "hotels"), orderBy("address.city"), startAt(prefix), endAt(prefix + "\uf8ff"), limit(3));
    const citySnapshot = await getDocs(cityQuery);

    citySnapshot.docs.forEach((doc) => {
      const { city, country } = doc.data().address;
      result.push({ id: doc.id, city, country });
    });

    if (result.length < 3) {
      const remainingLimit = 3 - result.length;
      const countryQuery = query(
        collection(db, "hotels"),
        orderBy("address.country"),
        startAt(prefix),
        endAt(prefix + "\uf8ff"),
        limit(remainingLimit)
      );

      const countrySnapshot = await getDocs(countryQuery);

      countrySnapshot.docs.forEach((doc) => {
        const { city, country } = doc.data().address;
        if (!result.some((area) => area.id === doc.id)) {
          result.push({ id: doc.id, city, country });
        }
      });
    }

    return result;
  } catch (error) {
    console.error("Error fetching areas by prefix:", error);
    throw error;
  }
};

export const fetchHotelsByPrefix = async (prefix: string): Promise<{ id: string; name: string; city: string; country: string }[]> => {
  try {
    const result: { id: string; name: string; city: string; country: string }[] = [];

    const hotelQuery = query(collection(db, "hotels"), orderBy("name"), startAt(prefix), endAt(prefix + "\uf8ff"), limit(3));

    const hotelSnapshot = await getDocs(hotelQuery);

    hotelSnapshot.docs.forEach((doc) => {
      const { name, address } = doc.data();
      const { city, country } = address;
      result.push({ id: doc.id, name, city, country });
    });

    return result;
  } catch (error) {
    console.error("Error fetching hotels by prefix:", error);
    throw error;
  }
};
