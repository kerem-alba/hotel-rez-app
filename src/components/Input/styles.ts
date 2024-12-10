import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_DARKER, BACKGROUND_COLOR_LIGHTER, PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    width: "100%",
  },
  input: {
    padding: 10,
    backgroundColor: BACKGROUND_COLOR,
    borderColor: BACKGROUND_COLOR_DARKER,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
  },

  errorText: {
    color: "red",
    paddingTop: 6,
    fontSize: 12,
  },
});
