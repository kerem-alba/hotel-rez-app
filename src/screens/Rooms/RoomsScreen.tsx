import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { StackNavigationProp } from "@react-navigation/stack";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";
import Button from "../../components/Button/Button";
import { useReservationDetailsStore } from "../../stores/reservationDetailsStore";

type RouteProps = RouteProp<RootStackParamList, "Rooms">;
type NavigationProps = StackNavigationProp<RootStackParamList, "Rooms">;

export default function RoomsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation<NavigationProps>();

  const { reservationDetails } = useReservationDetailsStore.getState();
  const { city, startDate, endDate, rooms, roomDetails } = reservationDetails;

  const start = parseInt(startDate.split(" ")[0], 10);
  const end = parseInt(endDate.split(" ")[0], 10);
  const nightCount = end - start;

  const totalGuests = roomDetails.reduce((total, room) => total + room.adults + room.children, 0);

  const { data } = route.params;
  console.log("data", data);
  return (
    <View style={styles.container}>
      <BackAndTitleHeader title={data.name} />
      <FlatList
        data={data.rooms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.roomContainer}>
            <Text style={styles.roomName}>{item.roomName}</Text>
            <Text style={styles.bedQuantity}>Makismum kişi sayısı: {item.bedQuantity}</Text>
            <FlatList
              data={item.imageUrls}
              keyExtractor={(imageUrl, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: imageUrl }) => <Image source={{ uri: imageUrl }} style={styles.roomImage} />}
            />
            <View style={styles.bottom}>
              <Text style={styles.summary}>{`${nightCount} Gece, ${rooms} Oda, ${totalGuests} Konuk için toplam`}</Text>
              <Text style={styles.price}>{data.pricePerNight * nightCount * rooms} $</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text="Rezervasyon Yap"
                onPress={() => {
                  navigation.navigate("ReservationDetails", {
                    hotelName: data.name,
                    roomName: item.roomName,
                  });
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
