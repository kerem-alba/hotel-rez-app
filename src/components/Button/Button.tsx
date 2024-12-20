import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "./Styles";
import { colors } from "../../utils/colors";

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export default function Button(buttonProps: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={buttonProps.onPress}
      disabled={buttonProps.disabled}
      style={[styles.button, { backgroundColor: buttonProps.disabled ? colors.SECONDARY_COLOR : colors.PRIMARY_COLOR }]}
    >
      <Text style={styles.buttonText}>{buttonProps.text}</Text>
    </TouchableOpacity>
  );
}
