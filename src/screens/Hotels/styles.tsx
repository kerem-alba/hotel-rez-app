import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_CONTRAST } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    marginBottom: -25,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    flexDirection: "row",
    marginTop: 10,
  },

  headerOne: {
    fontSize: 48,
    color: PRIMARY_COLOR,
    textShadowColor: SECONDARY_COLOR,
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },
  headerTwo: {
    fontSize: 48,
    color: SECONDARY_COLOR,
    textShadowColor: SECONDARY_COLOR,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: TEXT_CONTRAST,
  },
});
