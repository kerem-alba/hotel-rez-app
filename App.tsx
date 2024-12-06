import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { addHotel } from "./src/services/firebaseService";

export default function App() {
  const handleAddHotel = async () => {
    const newHotel = {
      name: "Costa Del Sol Hotel",
      address: {
        street: "123 Paseo Marítimo",
        city: "Barcelona",
        country: "Spain",
        latitude: "41.3851",
        longitude: "2.1734",
      },
      description: "A charming hotel near the Mediterranean Sea, perfect for a relaxing getaway.",
      imageUrls: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661923725782-f73c990fbddf?q=80&w=1729&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      pricePerNight: 220,
      rating: 4.9,
      rooms: [
        {
          roomName: "Sea View Deluxe",
          bedQuantity: 2,
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1661964301291-75df9dd37f23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          roomName: "Penthouse Suite",
          bedQuantity: 4,
          imageUrls: [
            "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ],
        },
      ],
    };

    try {
      const hotelId = await addHotel(newHotel);
      Alert.alert("Success", `Hotel added with ID: ${hotelId}`);
    } catch (error) {
      Alert.alert("Error", "Failed to add hotel. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Add New Hotel" onPress={handleAddHotel} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
