import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

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
    backgroundColor: colors.BACKGROUND_COLOR,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    color: colors.TEXT_COLOR,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    position: "absolute",
    right: 10,
  },

  icon: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
  },

  errorText: {
    color: "red",
    paddingTop: 6,
    fontSize: 12,
  },
});
