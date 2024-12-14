import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { addHotel } from "../../services/firebaseService";

export default function ReservationScreen() {
  const hotelData = {
    name: "JW Marriott Hotel Ankara",
    address: {
      city: "Ankara",
      cityImgUrl:
        "https://images.unsplash.com/photo-1653108835062-4e8f9b3332b4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      street: "Kızılırmak Mahallesi, Muhsin Yazıcıoğlu Cad. No:1",
      latitude: "39.9205",
      longitude: "32.8508",
      country: "Türkiye",
    },
    description: "Ankara'nın en prestijli otellerinden biri olan JW Marriott, lüks bir konaklama ve benzersiz bir deneyim sunar.",
    pricePerNight: 450,
    rating: 4.8,
    imageUrls: [
      "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/7883a5f2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/9e0a9aa2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    ],
    rooms: [
      {
        roomName: "Deluxe Room",
        bedQuantity: 1,
        imageUrls: [
          "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/a6959e13.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/4d019593.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        ],
      },
      {
        roomName: "Executive Suite",
        bedQuantity: 2,
        imageUrls: [
          "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/8ab9b2d5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          "https://images.trvl-media.com/lodging/5000000/4260000/4255900/4255837/a0306d3b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        ],
      },
    ],
  };

  const handleAddHotel = async () => {
    try {
      const docId = await addHotel(hotelData);
      Alert.alert("Başarılı", `Otel başarıyla eklendi! ID: ${docId}`);
    } catch (error) {
      Alert.alert("Hata", "Otel eklenirken bir hata oluştu.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddHotel}>
        <Text style={styles.addButtonText}>Otel Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  addButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
