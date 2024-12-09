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
    padding: 10,
    backgroundColor: BACKGROUND_COLOR,
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
  headerText: {
    color: TEXT_COLOR,
    fontSize: 20,
    marginLeft: 10,
  },
  roomContainer: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: BACKGROUND_COLOR_DARKER,
    padding: 10,
  },
  roomName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bedQuantity: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  roomImage: {
    paddingHorizontal: -5,
    width: width - 42,
    height: 200,
    borderRadius: 8,
  },
  bottom: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summary: {
    color: TEXT_COLOR,
    fontSize: 14,
    marginTop: 10,
    width: "50%",
  },
  price: {
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  reservationButton: {
    color: TEXT_CONTRAST,
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
    width: "100%",
  },
});
