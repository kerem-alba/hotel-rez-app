import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.BACKGROUND_COLOR,
    margin: 14,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.TEXT_COLOR,
    marginBottom: 5,
  },
  textContainer: {},
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.TEXT_COLOR,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  column: {
    flex: 1,
  },
  divider: {
    width: 1.5,
    backgroundColor: colors.BACKGROUND_COLOR_DARKER,
    marginHorizontal: 12,
    height: "100%",
  },
  horizontalDivider: {
    width: "100%",
    height: 2,
    backgroundColor: colors.BACKGROUND_COLOR_DARKER,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
