import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    padding: 10,
    marginTop: 40,
  },
  text: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
    marginLeft: 10,
  },
  hotels: {
    marginHorizontal: 8,
    paddingBottom: 140,
  },
  icon: {
    color: colors.TEXT_CONTRAST,
    alignSelf: "center",
    marginTop: 60,
    fontSize: 120,
  },
  noAccessContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 23,
  },

  noAccessText: {
    fontSize: 16,
    color: colors.TEXT_CONTRAST,
    textAlign: "center",
    marginTop: 20,
  },

  loginText: {
    color: colors.SECONDARY_COLOR,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
