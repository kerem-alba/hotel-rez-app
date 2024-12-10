import { Pressable, StyleSheet, Text, TextInput, View, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Feather from "@expo/vector-icons/Feather";

interface Props {
  placeholder?: string;
  value: string;
  errorText?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export default function PasswordInput(props: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const updateSecureTextEntry = () => {
    setSecureTextEntry((prev: boolean) => !prev);
  };
  return (
    <View style={styles.container}>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          value={props.value}
          onChangeText={(text) => props.onChangeText(text)}
          placeholder={props.placeholder}
          secureTextEntry={secureTextEntry}
          onBlur={props.onBlur}
        ></TextInput>
        <Pressable style={styles.icon} onPress={updateSecureTextEntry}>
          <Feather name={secureTextEntry ? "eye-off" : "eye"} size={24} color="black" />
        </Pressable>
      </View>
      {props.errorText && <Text style={styles.errorText}>{props.errorText}</Text>}
    </View>
  );
}
