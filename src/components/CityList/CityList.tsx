import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import CityCard from "../CityCard/CityCard";
import { City } from "../../utils/types";

interface CityListProps {
  cities: City[];
}

export default function CityList({ cities }: CityListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}> Şehirler </Text>
      </View>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <View>
            <CityCard city={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
