import { StyleSheet, Dimensions } from "react-native";
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_CONTRAST,
  BACKGROUND_COLOR_DARKER,
  BACKGROUND_COLOR_LIGHTER,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TEXT_CONTRAST,
} from "../../utils/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: 8,
  },

  formContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    position: "absolute",
    top: height * 0.16,
    left: width * 0.1,
    right: width * 0.1,
    bottom: height * 0.31,
    minHeight: 400,
  },
});
