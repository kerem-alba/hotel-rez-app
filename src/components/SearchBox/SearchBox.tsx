import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import RoomGuestSelectorModal from "../Modals/RoomGuestSelectorModal";
import DateSelectorModal from "../Modals/DateSelectorModal";
import CitySelectorModal from "../Modals/CitySelectorModal";

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface SearchBoxProps {
  onClose?: () => void;
}

export default function SearchBox({ onClose }: SearchBoxProps) {
  const navigation = useNavigation<NavigationProps>();

  const [isRoomModalVisible, setIsRoomModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [isCityModalVisible, setIsCityModalVisible] = useState(false);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const formatDate = (date: Date) => date.toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });

  const [selectedStartDate, setSelectedStartDate] = useState<string>(formatDate(today));
  const [selectedEndDate, setSelectedEndDate] = useState<string>(formatDate(tomorrow));
  const [selectedCity, setSelectedCity] = useState<string>("Ankara");
  const [selectedRoomGuestData, setSelectedRoomGuestData] = useState<{ rooms: number; roomDetails: { adults: number; children: number }[] }>({
    rooms: 1,
    roomDetails: [{ adults: 2, children: 0 }],
  });

  const handleRoomModalClose = (data: any) => {
    setSelectedRoomGuestData(data);
    setIsRoomModalVisible(false);
  };

  const handleDateModalClose = (data: { startDate: Date; endDate: Date }) => {
    const format = (date: Date) => date.toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });
    setSelectedStartDate(format(data.startDate));
    setSelectedEndDate(format(data.endDate));
    setIsDateModalVisible(false);
  };

  const handleCityModalClose = (data: { city?: string }) => {
    if (data.city) {
      setSelectedCity(data.city);
    }
    setIsCityModalVisible(false);
  };

  const handleSearch = () => {
    navigation.navigate("SearchResults", {
      city: selectedCity,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      ...selectedRoomGuestData,
    });

    if (onClose) {
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Gideceğin yer</Text>
        <TouchableOpacity onPress={() => setIsCityModalVisible(true)}>
          <Text style={styles.textBold}>{selectedCity}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalDivider} />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.title}>Giriş</Text>
          <TouchableOpacity style={styles.textContainer} onPress={() => setIsDateModalVisible(true)}>
            <Text style={styles.textBold}>{selectedStartDate}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.title}>Çıkış</Text>
          <TouchableOpacity style={styles.textContainer} onPress={() => setIsDateModalVisible(true)}>
            <Text style={styles.textBold}>{selectedEndDate}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.horizontalDivider} />

      <Text style={styles.title}>{`Şunun için ${selectedRoomGuestData.rooms} oda:`}</Text>
      <TouchableOpacity style={styles.textContainer} onPress={() => setIsRoomModalVisible(true)}>
        <Text style={styles.textBold}>
          {`${selectedRoomGuestData.roomDetails.reduce((total, room) => total + room.adults, 0)} yetişkin, ${
            selectedRoomGuestData.roomDetails.reduce((total, room) => total + room.children, 0) == 0
              ? "çocuk yok"
              : `${selectedRoomGuestData.roomDetails.reduce((total, room) => total + room.children, 0)} çocuk`
          }`}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Ara</Text>
      </TouchableOpacity>

      <CitySelectorModal visible={isCityModalVisible} onClose={handleCityModalClose} />
      <RoomGuestSelectorModal visible={isRoomModalVisible} onClose={handleRoomModalClose} />
      <DateSelectorModal visible={isDateModalVisible} onClose={handleDateModalClose} />
    </View>
  );
}
