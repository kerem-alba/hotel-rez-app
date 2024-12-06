import { View, TextInput, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import SearchBox from "../../components/SearchBox/SearchBox";
import HotelList from "../../components/HotelList/HotelList";
import { fetchHotels, fetchCities } from "../../services/firebaseService";
import { Hotel, City } from "../../utils/types";
import CityList from "../../components/CityList/CityList";

export default function HotelsScreen() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchHotelsFromDb = async () => {
      try {
        const hotels = await fetchHotels();
        setHotels(hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };
    const fetchCitiesFromDb = async () => {
      try {
        const cities = await fetchCities();
        setCities(cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCitiesFromDb();
    fetchHotelsFromDb();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerOne}>hotel</Text>
        <Text style={styles.headerTwo}>rez</Text>
      </View>
      <StatusBar style="light" />
      <SearchBox />
      <HotelList hotels={hotels} />
      <CityList cities={cities} />
    </ScrollView>
  );
}
