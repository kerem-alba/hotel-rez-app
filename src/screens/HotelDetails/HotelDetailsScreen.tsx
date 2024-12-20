import { View, Text, FlatList, Image, Dimensions, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { fetchHotelById } from "../../services/firebaseService";
import Loading from "../../components/Loading/Loading";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";
import { useQuery } from "@tanstack/react-query";
import HotelFacilities from "../../components/FakeDescription/HotelFacilities";
import { useUserStore } from "../../stores/userStore";
import { handlePressFavorite } from "../../services/favoriteService";
import Button from "../../components/Button/Button";

type RouteProps = RouteProp<RootStackParamList, "HotelDetails">;
type NavigationProps = StackNavigationProp<RootStackParamList, "HotelDetails">;

const { width } = Dimensions.get("window");

export default function HotelDetailsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();

  const [isFavorite, setIsFavorite] = useState(false);

  const userId = useUserStore((state) => state.userId);
  const userFavorites = useUserStore((state) => state.favorites);

  const { id } = route.params;

  useEffect(() => {
    setIsFavorite(userFavorites.includes(id));
  }, [userFavorites]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isPending } = useQuery({
    queryKey: ["HotelDetails", id],
    queryFn: () => fetchHotelById(id),
  });

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  const handlePress = () => {
    data && navigation.navigate("Rooms", { data });
    console.log("Rooms");
  };

  return (
    <View style={styles.container}>
      {isPending ? (
        <Loading />
      ) : (
        <>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={32} color="white" />
            </Pressable>
            <Pressable onPress={() => handlePressFavorite(userId, id, isFavorite)}>
              <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={32} color="white" />
            </Pressable>
          </View>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
            <View style={styles.imageContainer}>
              <FlatList
                data={data?.imageUrls || []}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
                keyExtractor={(item, index) => index.toString()}
              />
              <View style={styles.pagination}>
                {data?.imageUrls?.map((_, index) => (
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
              <Text style={styles.hotelName}>{data?.name}</Text>
              <View style={styles.iconContainer}>
                <Ionicons name="bookmark" size={50} color="green" />
                <Text style={styles.ratingText}>{data?.rating}</Text>
              </View>
              <MapView
                style={styles.map}
                provider="google"
                initialRegion={{
                  latitude: parseFloat(data?.address.latitude || "0"),
                  longitude: parseFloat(data?.address.longitude || "0"),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(data?.address.latitude || "0"),
                    longitude: parseFloat(data?.address.longitude || "0"),
                  }}
                  title="Otel Konumu"
                  description="Otelin bulunduğu yer"
                />
              </MapView>
              <View style={styles.adressContainer}>
                <Ionicons name="location" size={32} color="black" />
                <Text style={styles.adressText}>{data?.address.street} </Text>
                <Text style={styles.adressText}>{data?.address.city} </Text>
                <Text style={styles.adressText}>{data?.address.country}</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.hotelName}>Otel hakkında</Text>
              <Text style={styles.description}>{data?.description}</Text>
            </View>

            <HotelFacilities />
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.priceText}>$ {data?.pricePerNight}</Text>
            <Text style={styles.priceSubText}>başlayan fiyatlarla</Text>
            <View style={styles.buttonContainer}>
              <Button text="Oda Seçimi" onPress={handlePress} />
            </View>
          </View>
        </>
      )}
    </View>
  );
}
