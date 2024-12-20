import { View, Text, Button, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { fetchHotelsByIds } from "../../services/firebaseService";
import { Hotel } from "../../utils/types";
import { useUserStore } from "../../stores/userStore";
import HotelListVertical from "../../components/HotelListVertical/HotelListVertical";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../utils/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type NavigationProps = StackNavigationProp<RootStackParamList, "Favorites">;

export default function FavoritesScreen() {
  const navigation = useNavigation<NavigationProps>();

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const userId = useUserStore((state) => state.userId);
  const favorites = useUserStore((state) => state.favorites);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return;
      try {
        const hotelData = await fetchHotelsByIds(favorites);
        setHotels(hotelData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, [favorites, userId]);

  if (!userId) {
    return (
      <LinearGradient style={styles.container} colors={[colors.PRIMARY_COLOR, colors.BACKGROUND_COLOR]} end={[0.5, 1]}>
        <View style={styles.header}>
          <Text style={styles.text}>Favori oteller</Text>
        </View>
        <Ionicons name={"heart-outline"} style={styles.icon} />
        <View style={styles.noAccessContainer}>
          <Text style={styles.noAccessText}>
            Bu sayfada favorilerinize eklediğiniz otelleri görebilir ve bu oteller hakkında detaylı bilgiye ulaşabilirsiniz.
          </Text>
          <Text style={styles.noAccessText}>Favori otellerinizi görüntülemek için</Text>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.loginText}>Giriş Yapın</Text>
          </Pressable>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient style={styles.container} colors={[colors.PRIMARY_COLOR, colors.BACKGROUND_COLOR]} end={[0.5, 1]}>
      <View style={styles.header}>
        <Text style={styles.text}>Favori otellerin</Text>
      </View>
      <View style={styles.hotels}>
        <HotelListVertical hotels={hotels} />
      </View>
    </LinearGradient>
  );
}
