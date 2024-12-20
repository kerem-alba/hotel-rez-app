import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND_COLOR,
    padding: 8,
    flex: 1,
  },
  hotelListContainer: {
    gap: 18,
  },
});
