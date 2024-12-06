import React, { useState } from "react";
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function RoomSelectorModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [rooms, setRooms] = useState([{ adults: 2, children: 1 }]);

  const addRoom = () => {
    setRooms([...rooms, { adults: 2, children: 0 }]);
  };

  const updateRoom = (index: number, type: "adults" | "children", operation: "increment" | "decrement") => {
    const updatedRooms = [...rooms];
    updatedRooms[index][type] = operation === "increment" ? updatedRooms[index][type] + 1 : Math.max(0, updatedRooms[index][type] - 1);
    setRooms(updatedRooms);
  };

  return (
    <View style={styles.container}>
      <Button title="Oda Seç" onPress={() => setModalVisible(true)} />
      <Modal transparent visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {rooms.map((room, index) => (
              <View key={index} style={styles.room}>
                <Text style={styles.roomTitle}>Oda {index + 1}</Text>
                <View style={styles.counterRow}>
                  <Text>Yetişkin sayısı:</Text>
                  <TouchableOpacity onPress={() => updateRoom(index, "adults", "decrement")} style={styles.counterButton}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{room.adults}</Text>
                  <TouchableOpacity onPress={() => updateRoom(index, "adults", "increment")} style={styles.counterButton}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.counterRow}>
                  <Text>Çocuk sayısı:</Text>
                  <TouchableOpacity onPress={() => updateRoom(index, "children", "decrement")} style={styles.counterButton}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{room.children}</Text>
                  <TouchableOpacity onPress={() => updateRoom(index, "children", "increment")} style={styles.counterButton}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <TouchableOpacity onPress={addRoom} style={styles.addRoomButton}>
              <Text>Başka bir oda ekle</Text>
            </TouchableOpacity>
            <Button title="Uygula" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  room: {
    marginBottom: 20,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  counterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  counterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addRoomButton: {
    marginVertical: 10,
    alignItems: "center",
  },
});
