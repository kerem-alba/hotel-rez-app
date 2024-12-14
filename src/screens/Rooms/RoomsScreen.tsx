import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import BackAndTitleHeader from "../../components/Headers/BackAndTitleHeader";

type RouteProps = RouteProp<RootStackParamList, "Rooms">;

export default function RoomsScreen() {
  const route = useRoute<RouteProps>();

  const { data } = route.params;
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
              <Text style={styles.summary}>1 Gece, 1 Oda, 2 Yetişkin için toplam</Text>
              <Text style={styles.price}>{data.pricePerNight} $</Text>
            </View>
            <Pressable>
              <Text style={styles.reservationButton}>Rezervasyon Yap</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
