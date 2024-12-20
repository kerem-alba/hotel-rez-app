import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
    marginBottom: -25,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.TEXT_CONTRAST,
  },
});
