import { View, Text, TextInput, ScrollView, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { fetchAreasByPrefix, fetchHotelsByPrefix } from "../../services/firebaseService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import Loading from "../../components/Loading/Loading";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProps>();
  const [searchText, setSearchText] = useState("");
  const [filteredAreas, setFilteredAreas] = useState<{ id: string; city: string; country: string }[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<{ id: string; name: string; city: string; country: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const initialize = async () => {
      try {
        const areas = await fetchAreasByPrefix("");
        const hotels = await fetchHotelsByPrefix("");
        setFilteredAreas(areas);
        setFilteredHotels(hotels);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };
    initialize();
    setLoading(false);
  }, []);

  const handleSearch = async (text: string) => {
    setLoading(true);
    setSearchText(text);

    try {
      const areas = await fetchAreasByPrefix(text);
      const hotels = await fetchHotelsByPrefix(text);
      setFilteredAreas(areas);
      setFilteredHotels(hotels);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="BLACK" />
        </Pressable>
        <TextInput placeholder="Nereye gitmek istersiniz" value={searchText} onChangeText={handleSearch} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.areasContainer}>
          <Text style={styles.textBold}>Bölgeler</Text>
          {loading ? (
            <Loading />
          ) : (
            <FlatList
              data={filteredAreas}
              renderItem={({ item }) => (
                <Pressable style={styles.renderItem} onPress={() => console.log("Area")}>
                  <FontAwesome6 name="city" size={24} color="black" />
                  <View style={styles.textContainer}>
                    <Text>{item.city}</Text>
                    <Text>{item.country}</Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
        <View style={styles.hotelsContainer}>
          <Text style={styles.textBold}>Oteller</Text>
          {loading ? (
            <Loading />
          ) : (
            <FlatList
              data={filteredHotels}
              renderItem={({ item }) => (
                <Pressable style={styles.renderItem} onPress={() => console.log("Hotel")}>
                  <FontAwesome6 name="hotel" size={24} color="black" />
                  <View style={styles.textContainer}>
                    <Text>{item.name}</Text>
                    <Text>
                      {item.city}, {item.country}
                    </Text>
                  </View>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </View>
  );
}
