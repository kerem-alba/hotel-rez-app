import { StyleSheet } from "react-native";
import {
  BACKGROUND_COLOR_CONTRAST,
  BACKGROUND_COLOR_DARKER,
  BACKGROUND_COLOR_LIGHTER,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TEXT_CONTRAST,
} from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    padding: 10,
    marginTop: 40,
  },
  text: {
    color: TEXT_COLOR,
    fontSize: 20,
    marginLeft: 10,
  },
  hotels: {
    marginHorizontal: 8,
    paddingBottom: 140,
  },
});
