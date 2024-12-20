import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  query,
  limit,
  where,
  orderBy,
  startAt,
  endAt,
  arrayUnion,
  setDoc,
  doc,
  arrayRemove,
} from "firebase/firestore";
import { firebaseApp } from "../config/firebaseConfig";
import { Hotel } from "../utils/types";
import { useUserStore } from "../stores/userStore";

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
    const uniqueCities = new Set<string>(); // Benzersiz şehirleri tutmak için Set

    const citiesQuery = query(collection(db, "hotels"), orderBy("address.city"), limit(10));
    const citiesSnapshot = await getDocs(citiesQuery);

    citiesSnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const city = data?.address?.city;
      const cityImgUrl = data?.address?.cityImgUrl;
      if (city && cityImgUrl && !uniqueCities.has(city)) {
        uniqueCities.add(city);
        result.push({ id: doc.id, city, cityImgUrl });
      }
    });

    return result.sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching cities: ", error);
    throw error;
  }
};

export const fetchAreasByPrefix = async (prefix: string): Promise<{ id: string; city: string; country: string }[]> => {
  try {
    const result: { id: string; city: string; country: string }[] = [];
    const addedCities = new Set<string>();

    const mixedQuery = query(collection(db, "hotels"), orderBy("address.city"), startAt(prefix), endAt(prefix + "\uf8ff"), limit(6));

    const snapshot = await getDocs(mixedQuery);

    snapshot.docs.forEach((doc) => {
      const { city, country } = doc.data().address;
      if (!addedCities.has(city)) {
        result.push({ id: doc.id, city, country });
        addedCities.add(city);
      }
    });

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

export const fetchHotelById = async (id: string): Promise<Hotel> => {
  try {
    const hotelDoc = await getDocs(query(collection(db, "hotels"), where("__name__", "==", id)));
    return hotelDoc.docs[0].data() as Hotel;
  } catch (error) {
    console.error("Error fetching hotel by id:", error);
    throw error;
  }
};

export const fetchHotelsByCity = async (city: string): Promise<Hotel[]> => {
  try {
    const hotelsQuery = query(collection(db, "hotels"), where("address.city", "==", city), limit(10));
    const querySnapshot = await getDocs(hotelsQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Hotel[];
  } catch (error) {
    console.error("Error fetching hotels by city:", error);
    throw error;
  }
};

export const addUserFavorite = async (userId: string, hotelId: string) => {
  try {
    const { favorites, setFavorites } = useUserStore.getState();

    // Firestore işlemleri
    const favoritesQuery = query(collection(db, "favorites"), where("userId", "==", userId));
    const querySnapshot = await getDocs(favoritesQuery);

    if (!querySnapshot.empty) {
      const favoriteDoc = querySnapshot.docs[0];
      const favoriteDocRef = doc(db, "favorites", favoriteDoc.id);
      await updateDoc(favoriteDocRef, {
        hotels: arrayUnion(hotelId),
      });
    } else {
      await setDoc(doc(collection(db, "favorites")), {
        userId,
        hotels: [hotelId],
      });
    }

    // Favoriler güncellendiğinde store'da da güncelle
    setFavorites([...favorites, hotelId]);
    console.log("Hotel added to favorites and Zustand updated.");
  } catch (error) {
    console.error("Error adding user favorite:", error);
    throw error;
  }
};

export const removeUserFavorite = async (userId: string, hotelId: string) => {
  try {
    const { favorites, setFavorites } = useUserStore.getState();

    const favoritesQuery = query(collection(db, "favorites"), where("userId", "==", userId));
    const querySnapshot = await getDocs(favoritesQuery);

    if (!querySnapshot.empty) {
      const favoriteDoc = querySnapshot.docs[0];
      const favoriteDocRef = doc(db, "favorites", favoriteDoc.id);
      await updateDoc(favoriteDocRef, {
        hotels: arrayRemove(hotelId),
      });

      // Favoriler güncellendiğinde store'da da güncelle
      setFavorites(favorites.filter((id) => id !== hotelId));
      console.log("Hotel removed from favorites and Zustand updated.");
    }
  } catch (error) {
    console.error("Error removing user favorite:", error);
    throw error;
  }
};

export const fetchUserFavorites = async (userId: string): Promise<string[]> => {
  try {
    const favoritesQuery = query(collection(db, "favorites"), where("userId", "==", userId), limit(10));
    const querySnapshot = await getDocs(favoritesQuery);

    const hotelIds = querySnapshot.docs.flatMap((doc) => {
      const data = doc.data();
      return data.hotels || [];
    });

    return hotelIds;
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    throw error;
  }
};

export const fetchHotelsByIds = async (ids: string[]): Promise<Hotel[]> => {
  if (ids.length === 0) {
    console.log("No hotel IDs provided. Returning an empty array.");
    return [];
  }
  try {
    const hotelsQuery = query(collection(db, "hotels"), where("__name__", "in", ids));
    const querySnapshot = await getDocs(hotelsQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Hotel[];
  } catch (error) {
    console.error("Error fetching hotels by ids:", error);
    throw error;
  }
};

export const fetchUserReservations = async (userId: string): Promise<string[]> => {
  try {
    const reservationsQuery = query(collection(db, "reservations"), where("userId", "==", userId));
    const querySnapshot = await getDocs(reservationsQuery);

    const hotelIds = querySnapshot.docs.flatMap((doc) => {
      const data = doc.data();
      return data.hotels || [];
    });

    return hotelIds;
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    throw error;
  }
};

export const addUserReservation = async (userId: string, hotelName: string) => {
  try {
    const { reservations, setReservations } = useUserStore.getState();

    if (!hotelName) {
      throw new Error("hotelName is undefined or null. Cannot add to reservations.");
    }

    const reservationsQuery = query(collection(db, "reservations"), where("userId", "==", userId));
    const querySnapshot = await getDocs(reservationsQuery);

    if (!querySnapshot.empty) {
      const reservationDoc = querySnapshot.docs[0];
      const reservationDocRef = doc(db, "reservations", reservationDoc.id);
      await updateDoc(reservationDocRef, {
        hotels: arrayUnion(hotelName),
      });
    } else {
      await setDoc(doc(collection(db, "reservations")), {
        userId,
        hotels: [hotelName],
      });
    }

    setReservations([...reservations, hotelName]);
    console.log("Hotel added to reservations and Zustand updated.");
  } catch (error) {
    console.error("Error adding user reservation:", error);
    throw error;
  }
};

export const fetchHotelsByNames = async (names: string[]): Promise<Hotel[]> => {
  if (names.length === 0) {
    console.log("No hotel names provided. Returning an empty array.");
    return [];
  }
  try {
    const hotelsQuery = query(collection(db, "hotels"), where("name", "in", names));
    const querySnapshot = await getDocs(hotelsQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Hotel[];
  } catch (error) {
    console.error("Error fetching hotels by names:", error);
    throw error;
  }
};

export const fetchHotelByName = async (name: string): Promise<Hotel> => {
  try {
    const hotelsQuery = query(collection(db, "hotels"), where("name", "==", name));
    const querySnapshot = await getDocs(hotelsQuery);
    return querySnapshot.docs[0].data() as Hotel;
  } catch (error) {
    console.error("Error fetching hotel by name:", error);
    throw error;
  }
};
