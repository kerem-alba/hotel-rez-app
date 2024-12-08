import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_CONTRAST, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_CONTRAST } from "../../utils/colors";

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
    backgroundColor: BACKGROUND_COLOR_CONTRAST,
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
    color: TEXT_CONTRAST,
  },
});
