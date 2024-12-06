import { View, Text, Button } from "react-native";
import React from "react";
import { addHotel } from "../../services/firebaseService";

export default function FavoritesScreen() {
  const handleAddHotel = async () => {
    const newHotel = {
      address: {
        city: "Kapadokya",
        country: "Türkiye",
        street: "Güvercinlik Vadisi Yolu",
        latitude: "38.6439",
        longitude: "34.8306",
        cityImgUrl:
          "https://images.unsplash.com/photo-1732951341782-13287833cfea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      name: "Fairy Chimney Inn",
      description: "Peribacaları arasında büyülü bir deneyim sunar.",
      pricePerNight: 250,
      rating: 4.6,
      imageUrls: [
        "https://images.unsplash.com/photo-1715525291381-4c984b3a2c52?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1712117949787-4601fe2e33d4?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      rooms: [
        {
          roomName: "Cave Room",
          bedQuantity: 1,
          imageUrl:
            "https://images.unsplash.com/photo-1669046635805-eb7abf0418a0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          roomName: "Terrace Suite",
          bedQuantity: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1669046637284-66bca1466f82?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    };
    try {
      await addHotel(newHotel);
      console.log("Hotel added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>FavoritesScreen</Text>
      <Button title="Add Hotel" onPress={handleAddHotel} />
    </View>
  );
}
