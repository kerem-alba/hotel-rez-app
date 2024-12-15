import { View, Text, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { fetchUserFavorites, fetchHotelsByIds } from "../../services/firebaseService";
import { Hotel } from "../../utils/types";
import { useUserStore } from "../../stores/userStore";
import HotelListVertical from "../../components/HotelListVertical/HotelListVertical";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { PRIMARY_COLOR } from "../../utils/colors";

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
    <LinearGradient style={styles.container} colors={[PRIMARY_COLOR, "transparent"]} end={[0.5, 1]}>
      <View style={styles.header}>
        <Text style={styles.text}>Favori otellerin</Text>
      </View>
      <View style={styles.hotels}>
        <HotelListVertical hotels={hotels} />
      </View>
    </LinearGradient>
  );
}
