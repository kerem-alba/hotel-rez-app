import { View, Text, TextInput, ScrollView, Pressable, FlatList, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { fetchAreasByPrefix, fetchHotelsByPrefix } from "../../services/firebaseService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import Loading from "../../components/Loading/Loading";
import { styles } from "./stylesCity";

interface CitySelectorModalProps {
  visible: boolean;
  onClose: (selectedData: { city?: string }) => void;
}

type NavigationProps = StackNavigationProp<RootStackParamList, "CitySelectorModal">;

export default function CitySelectorModal({ visible, onClose }: CitySelectorModalProps) {
  const navigation = useNavigation<NavigationProps>();
  const [searchText, setSearchText] = useState("");
  const [filteredAreas, setFilteredAreas] = useState<{ id: string; city: string; country: string }[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<{ id: string; name: string; city: string; country: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible) {
      handleSearch("");
    }
  }, [visible]);

  const handleSearch = async (text: string) => {
    setLoading(true);
    setSearchText(text);

    try {
      const areas = await fetchAreasByPrefix(text);
      const hotels = await fetchHotelsByPrefix(text);
      setFilteredAreas(areas);
      setFilteredHotels(hotels);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={() => onClose({})}>
      <Pressable style={styles.overlay}>
        <Pressable style={styles.background} onPress={() => onClose({})} />
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="BLACK" />
            </Pressable>
            <TextInput placeholder="Nereye gitmek istersiniz" value={searchText} onChangeText={handleSearch} />
          </View>
          <View style={styles.horizontalDivider} />

          <View style={styles.infoContainer}>
            <View style={styles.areasContainer}>
              <Text style={styles.textBold}>Bölgeler</Text>
              {loading ? (
                <Loading />
              ) : (
                <FlatList
                  data={filteredAreas}
                  renderItem={({ item }) => (
                    <Pressable
                      style={styles.renderItem}
                      onPress={() =>
                        onClose({
                          city: item.city,
                        })
                      }
                    >
                      <FontAwesome6 name="city" size={24} color="black" />
                      <View>
                        <Text>{item.city}</Text>
                        <Text>{item.country}</Text>
                      </View>
                    </Pressable>
                  )}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                  numColumns={1}
                  style={{ height: 300 }}
                />
              )}
            </View>
            <View style={styles.areasContainer}>
              <Text style={styles.textBold}>Oteller</Text>
              {loading ? (
                <Loading />
              ) : (
                <FlatList
                  data={filteredHotels}
                  renderItem={({ item }) => (
                    <Pressable style={styles.renderItem} onPress={() => navigation.navigate("HotelDetails", { id: item.id })}>
                      <FontAwesome6 name="hotel" size={24} color="black" />
                      <View>
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
      </Pressable>
    </Modal>
  );
}
