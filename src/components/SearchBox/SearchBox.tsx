import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import RoomGuestSelectorModal from "../Modals/RoomGuestSelectorModal";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function SearchBox() {
  const navigation = useNavigation<NavigationProps>();

  interface ModalData {
    rooms: number;
    roomDetails: { adults: number; children: number }[];
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>(null);

  const handleModalClose = (data: any) => {
    setModalData(data);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gideceğin yer</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text style={styles.textBold}>Barselona</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalDivider} />
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Giriş</Text>
          <TouchableOpacity style={styles.textContainer} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.textBold}>19 Ara 2024</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.title}>Çıkış</Text>
          <TouchableOpacity style={styles.textContainer} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.textBold}>28 Ara 2024</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalDivider} />
      <Text style={styles.title}>{modalData ? `Şunun için ${modalData.rooms} oda:` : "Şunun için 1 oda:"}</Text>
      <TouchableOpacity style={styles.textContainer} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.textBold}>
          {modalData
            ? `${modalData.roomDetails.reduce((total: number, room: { adults: number; children: number }) => total + room.adults, 0)} yetişkin, ${
                modalData.roomDetails.reduce((total: number, room: { adults: number; children: number }) => total + room.children, 0) > 0
                  ? `${modalData.roomDetails.reduce((total: number, room: { adults: number; children: number }) => total + room.children, 0)} çocuk`
                  : "çocuk yok"
              }`
            : "2 yetişkin, çocuk yok"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ara</Text>
      </TouchableOpacity>
      <RoomGuestSelectorModal visible={isModalVisible} onClose={handleModalClose} />;
    </View>
  );
}
