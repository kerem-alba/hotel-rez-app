import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    margin: 15,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: colors.TEXT_COLOR,
    fontFamily: "HostGrotesk-Bold",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
