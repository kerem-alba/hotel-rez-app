import { View, Text, Button, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchHotelsByNames } from "../../services/firebaseService";
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

type NavigationProps = StackNavigationProp<RootStackParamList, "Reservations">;

export default function ReservationsScreen() {
  const navigation = useNavigation<NavigationProps>();

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const userId = useUserStore((state) => state.userId);
  const reservations = useUserStore((state) => state.reservations);

  useEffect(() => {
    const fetchReservations = async () => {
      if (!userId) return;
      try {
        const hotelData = await fetchHotelsByNames(reservations);
        setHotels(hotelData);
        console.log("hotelData", hotelData);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchReservations();
  }, [reservations, userId]);

  if (!userId) {
    return (
      <LinearGradient style={styles.container} colors={[colors.PRIMARY_COLOR, colors.BACKGROUND_COLOR]} end={[0.5, 1]}>
        <View style={styles.header}>
          <Text style={styles.text}>Rezervasyonlar</Text>
        </View>
        <Ionicons name={"calendar-outline"} style={styles.icon} />
        <View style={styles.noAccessContainer}>
          <Text style={styles.noAccessText}>Bu sayfada rezervasyonlarınızı görebilir ve oteller hakkında detaylı bilgiye ulaşabilirsiniz.</Text>
          <Text style={styles.noAccessText}>Rezervasyonlarınızı yönetmek için</Text>
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
        <Text style={styles.text}>Rezervasyonlar</Text>
      </View>
      <View style={styles.hotels}>
        <HotelListVertical hotels={hotels} />
      </View>
    </LinearGradient>
  );
}
