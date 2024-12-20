import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Hotel } from "../../utils/types";
import HotelCardWide from "../HotelCardWide/HotelCardWide";

interface HotelListProps {
  hotels: Hotel[];
}

export default function HotelListVertical({ hotels }: HotelListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <View>
            <HotelCardWide hotel={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
