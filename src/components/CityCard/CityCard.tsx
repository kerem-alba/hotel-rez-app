import { Text, Pressable, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/type";
import { styles } from "./styles";
import { City } from "../../utils/types";

type NavigationProps = StackNavigationProp<RootStackParamList, "Search">;

export default function CityCard({ city }: { city: City }) {
  const navigation = useNavigation<NavigationProps>();
  const handlePress = () => {
    navigation.navigate("CityResults", { city: city.city });
    console.log("CityCard pressed");
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <ImageBackground source={{ uri: city.cityImgUrl }} style={styles.image} resizeMode="cover">
        <BlurView style={styles.textOverlay} intensity={30} tint="dark" experimentalBlurMethod="dimezisBlurView">
          <Text style={styles.cityName}>{city.city}</Text>
        </BlurView>
      </ImageBackground>
    </Pressable>
  );
}
