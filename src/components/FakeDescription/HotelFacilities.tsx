import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../utils/colors";

const generalFacilities = ["Ücretsiz kablosuz internet", "Otopark", "Restoran", "Bar", "24 saat açık resepsiyon", "Bahçe", "Teras"];
const roomFacilities = ["Klima", "Televizyon", "Uydu yayını", "Mini bar", "Kasa", "Duş", "Saç kurutma makinesi"];
const otherFacilities = ["Toplantı odaları", "Oyun odası", "Çocuk oyun alanı", "Fitness merkezi", "Spa", "Masaj", "Sauna"];
const accessibilityFacilities = ["Asansör", "Engelli park yeri", "Engelli tuvaleti"];

export default function HotelFacilities() {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Ionicons name="reader-outline" size={24} color="black" />
        <Text style={styles.titleText}>Hizmet Olanakları</Text>
      </View>

      {/* General Facilities */}
      <View style={styles.section}>
        <View style={styles.subtitleContainer}>
          <MaterialCommunityIcons name="home-outline" size={20} color="black" />
          <Text style={styles.subtitle}>Genel</Text>
        </View>
        {generalFacilities.map((facility, index) => (
          <View style={styles.itemContainer} key={index}>
            <Ionicons name="ellipse" size={8} color="black" style={styles.bullet} />
            <Text style={styles.itemText}>{facility}</Text>
          </View>
        ))}
      </View>

      {/* Room Facilities */}
      <View style={styles.section}>
        <View style={styles.subtitleContainer}>
          <FontAwesome5 name="bed" size={18} color="black" />
          <Text style={styles.subtitle}>Oda Olanakları</Text>
        </View>
        {roomFacilities.map((facility, index) => (
          <View style={styles.itemContainer} key={index}>
            <Ionicons name="ellipse" size={8} color="black" style={styles.bullet} />
            <Text style={styles.itemText}>{facility}</Text>
          </View>
        ))}
      </View>

      {/* Other Facilities */}
      <View style={styles.section}>
        <View style={styles.subtitleContainer}>
          <Ionicons name="cog-outline" size={20} color="black" />
          <Text style={styles.subtitle}>Diğer Olanaklar</Text>
        </View>
        {otherFacilities.map((facility, index) => (
          <View style={styles.itemContainer} key={index}>
            <Ionicons name="ellipse" size={8} color="black" style={styles.bullet} />
            <Text style={styles.itemText}>{facility}</Text>
          </View>
        ))}
      </View>

      {/* Accessibility Facilities */}
      <View style={styles.section}>
        <View style={styles.subtitleContainer}>
          <MaterialCommunityIcons name="wheelchair-accessibility" size={20} color="black" />
          <Text style={styles.subtitle}>Erişilebilirlik</Text>
        </View>
        {accessibilityFacilities.map((facility, index) => (
          <View style={styles.itemContainer} key={index}>
            <Ionicons name="ellipse" size={8} color="black" style={styles.bullet} />
            <Text style={styles.itemText}>{facility}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  section: {
    marginTop: 15,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  subtitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bullet: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});
