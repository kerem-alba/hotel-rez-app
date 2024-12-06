import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flexDirection: "row",
  },
  headerOne: {
    fontSize: 48,
    color: PRIMARY_COLOR,
  },
  headerTwo: {
    fontSize: 48,
    color: SECONDARY_COLOR,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: TEXT_LIGHT,
  },
});
