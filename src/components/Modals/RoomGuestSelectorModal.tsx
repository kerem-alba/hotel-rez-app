import { View, Text, Modal, Pressable, TouchableOpacity, ScrollView, Switch } from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { styles } from "./styles";

interface ModalProps {
  visible: boolean;
  onClose: (data: { rooms: number; roomDetails: { adults: number; children: number }[]; isPetFriendly: boolean }) => void;
}

export default function RoomGuestSelectorModal({ visible, onClose }: ModalProps) {
  const [rooms, setRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([{ adults: 2, children: 0 }]);
  const [isPetFriendly, setIsPetFriendly] = useState(false);

  const toggleSwitch = () => setIsPetFriendly((previousState) => !previousState);

  const updateRoomDetails = (index: number, type: "adults" | "children", operation: "increment" | "decrement") => {
    setRoomDetails((prevDetails) =>
      prevDetails.map((room, i) => {
        if (i === index) {
          const updatedValue = operation === "increment" ? room[type] + 1 : room[type] - 1;
          return {
            ...room,
            [type]: Math.max(0, updatedValue),
          };
        }
        return room;
      })
    );
  };

  const incrementRooms = () => {
    setRooms((prev) => prev + 1);
    setRoomDetails((prevDetails) => [...prevDetails, { adults: 2, children: 0 }]);
  };

  const decrementRooms = () => {
    if (rooms > 1) {
      setRooms((prev) => prev - 1);
      setRoomDetails((prevDetails) => prevDetails.slice(0, -1));
    }
  };

  const handleClose = () => {
    onClose({
      rooms,
      roomDetails,
      isPetFriendly,
    });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={handleClose}>
      <Pressable style={styles.overlay}>
        <Pressable style={styles.background} onPress={handleClose} />
        <View style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.title}>Odalar</Text>
            <View style={styles.row}>
              <Text style={styles.text}>Odalar</Text>
              <View style={styles.numberContainer}>
                <TouchableOpacity onPress={decrementRooms}>
                  <Text style={styles.minusPlus}>-</Text>
                </TouchableOpacity>
                <Text>{rooms}</Text>
                <TouchableOpacity onPress={incrementRooms}>
                  <Text style={styles.minusPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.horizontalDivider} />

            {roomDetails.map((room, index) => (
              <View key={index} style={styles.roomContainer}>
                <Text style={styles.roomTitle}>{index + 1}. Oda</Text>

                <View style={styles.row}>
                  <Text style={styles.text}>Yetişkin</Text>
                  <View style={styles.numberContainer}>
                    <TouchableOpacity onPress={() => updateRoomDetails(index, "adults", "decrement")}>
                      <Text style={styles.minusPlus}>-</Text>
                    </TouchableOpacity>
                    <Text>{room.adults}</Text>
                    <TouchableOpacity onPress={() => updateRoomDetails(index, "adults", "increment")}>
                      <Text style={styles.minusPlus}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.row}>
                  <Text style={styles.text}>Çocuk</Text>
                  <View style={styles.numberContainer}>
                    <TouchableOpacity onPress={() => updateRoomDetails(index, "children", "decrement")}>
                      <Text style={styles.minusPlus}>-</Text>
                    </TouchableOpacity>
                    <Text>{room.children}</Text>
                    <TouchableOpacity onPress={() => updateRoomDetails(index, "children", "increment")}>
                      <Text style={styles.minusPlus}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            <View style={styles.horizontalDivider} />

            <View style={styles.row}>
              <Text style={styles.text}>Evcil Hayvan Dostu</Text>
              <Switch
                value={isPetFriendly}
                onValueChange={toggleSwitch}
                thumbColor={isPetFriendly ? "white" : "gray"}
                trackColor={{ false: colors.BACKGROUND_COLOR, true: colors.PRIMARY_COLOR }}
              />
            </View>

            <Pressable style={styles.applyButton} onPress={handleClose}>
              <Text style={styles.buttonText}>Uygula</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}
