import { View, Text, Pressable, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import { Hotel } from "../../utils/types";
import { Ionicons } from "@expo/vector-icons";
import { addUserFavorite } from "../../services/firebaseService";
import { useUserStore } from "../../stores/userStore";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function HotelCardWide({ hotel }: { hotel: Hotel }) {
  const navigation = useNavigation<NavigationProps>();

  const userId = useUserStore((state) => state.userId);

  const handlePressFavorite = async () => {
    if (!userId) {
      console.log("Kullanıcı giriş yapmamış, favori eklenemiyor.");
      return;
    }
    try {
      console.log("Favoriye ekleniyor:", hotel.id, userId);
      await addUserFavorite(userId, hotel.id);
      console.log("Favoriye başarıyla eklendi:", hotel.id);
    } catch (error) {
      console.error("Favori eklenirken hata oluştu:", error);
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("HotelDetails", { id: hotel.id })}>
      <ImageBackground source={{ uri: hotel.imageUrls[0] }} style={styles.image} resizeMode="cover">
        <BlurView style={styles.heartOverlay} intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView">
          <Pressable onPress={handlePressFavorite}>
            <Ionicons name="heart-outline" size={24} color="white" />
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
