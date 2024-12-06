import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Hotel } from "../../utils/types";
import HotelCard from "../HotelCard/HotelCard";

interface HotelListProps {
  hotels: Hotel[];
}

export default function HotelList({ hotels }: HotelListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}> Sizin için tavsiye edilenler </Text>
        <TouchableOpacity onPress={() => console.log("Tümünü gör")}>
          <Text style={styles.text}> Tümünü gör </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={hotels}
        renderItem={({ item }) => (
          <View>
            <HotelCard hotel={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
