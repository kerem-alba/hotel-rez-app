import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchUserFavorites, fetchHotelsByIds } from "../../services/firebaseService";
import { Hotel } from "../../utils/types";
import { useUserStore } from "../../stores/userStore";
import HotelListVertical from "../../components/HotelListVertical/HotelListVertical";
import HotelList from "../../components/HotelList/HotelList";

export default function FavoritesScreen() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const userId = useUserStore.getState().userId;
  const favorites = useUserStore((state) => state.favorites);

  console.log("userId", userId);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return;
      try {
        const favorites = await fetchUserFavorites(userId);
        const hotels = await fetchHotelsByIds(favorites.map((fav) => fav));
        setHotels(hotels);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, [favorites, userId]);

  return (
    <View>
      <HotelListVertical hotels={hotels} />
    </View>
  );
}
