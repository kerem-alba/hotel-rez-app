import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import RoomSelectorModal from "../Modal/RoomSelectorModal";
import { styles } from "./styles";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function SearchBox() {
  const navigation = useNavigation<NavigationProps>();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState("2 yetişkin, çocuksuz");

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gideceğin yer</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={styles.textBold}>Barselona</Text>
          {/* Search screende gelen prop */}
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalDivider} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Giriş</Text>
          <TouchableOpacity style={styles.textContainer} onPress={openModal}>
            <Text style={styles.textBold}>19 Ara 2024</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.title}>Çıkış</Text>
          <TouchableOpacity style={styles.textContainer} onPress={openModal}>
            <Text style={styles.textBold}>28 Ara 2024</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalDivider} />
      <Text style={styles.title}>Şunun için 1 oda:</Text>
      <TouchableOpacity style={styles.textContainer} onPress={openModal}>
        <Text style={styles.textBold}>{selectedGuests}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ara</Text>
      </TouchableOpacity>
    </View>
  );
}
