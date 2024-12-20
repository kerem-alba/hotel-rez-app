import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    height: 400,
  },
  image: {
    width: "100%",
    height: 250,
    flex: 1,
  },
  textOverlay: {
    height: 40,
    backgroundColor: colors.BACKGROUND_COLOR_CONTRAST,
    opacity: 0.7,
    top: 212,
    paddingLeft: 10,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
  },
  cityName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.TEXT_CONTRAST,
  },
});
