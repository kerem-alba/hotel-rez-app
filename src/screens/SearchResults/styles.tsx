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
    backgroundColor: BACKGROUND_COLOR,
    padding: 8,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: BACKGROUND_COLOR_DARKER,
    padding: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginLeft: width * 0.25,
  },
});
