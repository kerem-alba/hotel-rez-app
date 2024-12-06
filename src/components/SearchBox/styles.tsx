import { StyleSheet } from "react-native";
import { TEXT_LIGHT, BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, BACKGROUND_COLOR_LIGHT } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
    margin: 14,
  },
  titleContainer: {
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    marginBottom: 5,
  },
  textContainer: {},
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: TEXT_LIGHT,
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
    width: 1,
    backgroundColor: "white",
    marginHorizontal: 12,
    height: "100%",
  },
  horizontalDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "white",
    marginVertical: 10,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
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
