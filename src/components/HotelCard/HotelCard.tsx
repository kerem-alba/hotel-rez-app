import { View, Text, Pressable, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import { Hotel } from "../../utils/types";
import Entypo from "@expo/vector-icons/Entypo";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const navigation = useNavigation<NavigationProps>();
  return (
    <Pressable style={styles.container} onPress={() => console.log("navigate to details")}>
      <ImageBackground source={{ uri: hotel.imageUrls[0] }} style={styles.image} resizeMode="cover">
        <BlurView style={styles.textOverlay} intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView">
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.bottom}>
            <Text style={styles.city}>{hotel.address.city}</Text>
            <Text style={styles.price}>{hotel.pricePerNight} USD</Text>
          </View>
        </BlurView>
      </ImageBackground>
    </Pressable>
  );
}
