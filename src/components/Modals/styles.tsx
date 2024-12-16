import { StyleSheet } from "react-native";
import { TEXT_CONTRAST, PRIMARY_COLOR, BACKGROUND_COLOR_LIGHTER, BACKGROUND_COLOR_DARKER } from "../../utils/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    padding: 20,
    width: "80%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    maxHeight: "80%",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  roomContainer: {
    marginVertical: 10,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  applyButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: TEXT_CONTRAST,
    fontSize: 16,
    fontWeight: "bold",
  },
  minusPlus: {
    fontSize: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    textAlign: "center",
  },

  horizontalDivider: {
    width: "100%",
    height: 2,
    backgroundColor: BACKGROUND_COLOR_DARKER,
    marginVertical: 10,
  },
});
