import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../utils/colors";

interface BackAndTitleHeaderProps {
  title: string;
  text?: string;
}

export default function BackAndTitleHeader({ title, text }: BackAndTitleHeaderProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="BLACK" />
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    padding: 10,
    marginTop: 30,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  text: {
    color: colors.TEXT_COLOR,
    fontSize: 14,
    marginLeft: 10,
  },
});
