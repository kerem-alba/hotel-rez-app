import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/type";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { header } from "../../utils/constants";

type NavigationProps = BottomTabScreenProps<RootStackParamList, "Intro">["navigation"];

export default function IntroductionScreen() {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    const initialize = async () => {
      AsyncStorage.getItem("token").then((t) => {
        t && (header.accessToken = t);
      });
      console.log("Token mevcut:", header.accessToken);
      navigation.navigate("Main", { screen: "Hotels" });
    };
    initialize();
  }, [navigation]);

  return (
    <View>
      <Text>IntroductionScreen</Text>
    </View>
  );
}
