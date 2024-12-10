import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BACKGROUND_COLOR, TEXT_COLOR, BACKGROUND_COLOR_LIGHTER, BACKGROUND_COLOR_DARKER } from "../../utils/colors";

interface BackAndTitleHeaderProps {
  title: string;
}

export default function BackAndTitleHeader({ title }: BackAndTitleHeaderProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="BLACK" />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: BACKGROUND_COLOR_DARKER,
    padding: 10,
    marginTop: 30,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 20,
    marginLeft: 10,
  },
});
