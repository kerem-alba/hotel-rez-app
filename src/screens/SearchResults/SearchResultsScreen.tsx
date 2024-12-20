import { Pressable, View } from "react-native";
import React, { useState } from "react";
import { fetchHotelsByCity } from "../../services/firebaseService";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import { Hotel } from "../../utils/types";
import HotelListVertical from "../../components/HotelListVertical/HotelListVertical";
import { styles } from "./styles";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";
import SearchBoxModal from "../../components/Modals/SearchBoxModal";

type RouteProps = RouteProp<RootStackParamList, "SearchResults">;

export default function SearchResultsScreen() {
  const route = useRoute<RouteProps>();

  const { city, startDate, endDate, rooms, roomDetails } = route.params;

  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: ["CityResults", city],
    queryFn: () => fetchHotelsByCity(city),
  });

  const formatHeaderText = (startDate: string, endDate: string, rooms: number, roomDetails: { adults: number; children: number }[]) => {
    const totalGuests = roomDetails.reduce((total, room) => total + room.adults + room.children, 0);

    const formatDate = (date: string) => {
      const parts = date.split(" ");
      const day = parts[0];
      const month = parts[1];
      return `${day} ${month}`;
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}, ${rooms} oda ${totalGuests} konuk`;
  };

  return (
    <View style={styles.container}>
      {isPending ? (
        <Loading />
      ) : (
        <View>
          <Pressable onPress={() => setSearchModalVisible(true)}>
            <BackAndTitleHeader title={city} text={formatHeaderText(startDate, endDate, rooms, roomDetails)} />
          </Pressable>
          <View style={styles.hotelListContainer}>
            <HotelListVertical hotels={data as Hotel[]} />
          </View>
          <SearchBoxModal visible={isSearchModalVisible} onClose={() => setSearchModalVisible(false)} />
        </View>
      )}
    </View>
  );
}
