import { View, Text, FlatList, Image, Dimensions, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { fetchHotelById } from "../../services/firebaseService";
import { Hotel } from "../../utils/types";
import Loading from "../../components/Loading/Loading";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RouteProps = RouteProp<RootStackParamList, "HotelDetails">;
type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

const { width } = Dimensions.get("window");

export default function HotelDetailsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();

  const { id } = route.params;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hotel, setHotel] = useState<Hotel>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      setLoading(true);
      try {
        const hotel = await fetchHotelById(id);
        setHotel(hotel);
      } catch (error) {
        console.error("Error fetching hotel by id:", error);
      }
      setLoading(false);
    };
    fetchHotel();
  }, [id]);

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="white" />
          </Pressable>
          <Ionicons name="heart-outline" size={32} color="white" />
        </View>
        <View style={styles.imageContainer}>
          <FlatList
            data={hotel?.imageUrls || []}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.pagination}>
            {hotel?.imageUrls?.map((_, index) => (
              <View key={index} style={[styles.dot, currentIndex === index ? styles.activeDot : null]} />
            ))}
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <Ionicons key={index} name="star" size={16} color="gold" />
            ))}
          </View>
          <Text style={styles.hotelName}>{hotel?.name}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="bookmark" size={50} color="green" />
            <Text style={styles.ratingText}>{hotel?.rating}</Text>
          </View>
          <View style={styles.adressContainer}>
            <Ionicons name="location" size={32} color="white" />
            <View style={styles.adressTextContainer}>
              <Text style={styles.adressText}>{hotel?.address.street}</Text>
              <Text style={styles.adressText}>
                {hotel?.address.city} {"  "} {hotel?.address.country}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
