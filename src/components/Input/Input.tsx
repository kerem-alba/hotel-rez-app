import { Text, TextInput, View, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import React from "react";
import { styles } from "./styles";
interface Props {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  errorText?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
const Input = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={props.value}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={(text) => props.onChangeText(text)}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      ></TextInput>
      {props.errorText && <Text style={styles.errorText}>{props.errorText}</Text>}
    </View>
  );
};

export default Input;
