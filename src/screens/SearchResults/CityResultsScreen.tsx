import { View, Text, Pressable } from "react-native";
import React from "react";
import { fetchHotelsByCity } from "../../services/firebaseService";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
import { Hotel } from "../../utils/types";
import HotelListVertical from "../../components/HotelListVertical/HotelListVertical";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";

type RouteProps = RouteProp<RootStackParamList, "CityResults">;
type NavigationProps = StackNavigationProp<RootStackParamList, "Rooms">;

export default function CityResultsScreen() {
  const navigation = useNavigation<NavigationProps>();

  const route = useRoute<RouteProps>();

  const { city } = route.params;

  const { data, isPending } = useQuery({
    queryKey: ["CityResults", city],
    queryFn: () => fetchHotelsByCity(city),
  });

  return (
    <View style={styles.container}>
      {isPending ? (
        <Loading />
      ) : (
        <View>
          <BackAndTitleHeader title={city} />
          <View style={styles.hotelListContainer}>
            <HotelListVertical hotels={data as Hotel[]} />
          </View>
        </View>
      )}
    </View>
  );
}
