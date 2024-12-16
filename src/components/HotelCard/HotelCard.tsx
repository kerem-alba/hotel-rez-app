import { View, Text, Pressable, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import { Hotel } from "../../utils/types";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../../stores/userStore";
import { handlePressFavorite } from "../../services/favoriteService";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const navigation = useNavigation<NavigationProps>();

  const userId = useUserStore((state) => state.userId);
  const userFavorites = useUserStore((state) => state.favorites);

  const [isFavorite, setIsFavorite] = useState(userFavorites.includes(hotel.id));

  useEffect(() => {
    setIsFavorite(userFavorites.includes(hotel.id));
  }, [userFavorites]);
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("HotelDetails", { id: hotel.id })}>
      <ImageBackground source={{ uri: hotel.imageUrls[0] }} style={styles.image} resizeMode="cover">
        <BlurView style={styles.heartOverlay} intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView">
          <Pressable onPress={() => handlePressFavorite(userId, hotel.id, isFavorite)}>
            <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color="white" />
          </Pressable>
        </BlurView>

        <BlurView style={styles.textOverlay} intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView">
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="bookmark" size={50} style={styles.bookmark} />
            <Text style={styles.ratingText}>{hotel.rating}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.city}>{hotel.address.city}</Text>
            <Text style={styles.price}>$ {hotel.pricePerNight} </Text>
            <Text style={styles.priceText}>/night</Text>
          </View>
        </BlurView>
      </ImageBackground>
    </Pressable>
  );
}
