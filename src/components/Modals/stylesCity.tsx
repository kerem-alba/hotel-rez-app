import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    width: "95%",
    maxHeight: "90%",
  },
  horizontalDivider: {
    width: "100%",
    height: 2,
    backgroundColor: colors.BACKGROUND_COLOR_DARKER,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: colors.BACKGROUND_COLOR,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    alignItems: "center",
    gap: 10,
  },
  infoContainer: {
    backgroundColor: colors.BACKGROUND_COLOR,
    margin: 10,
    flex: 1,
    borderRadius: 10,
  },
  areasContainer: {
    backgroundColor: colors.BACKGROUND_COLOR,
    margin: 5,
    flex: 1,
  },
  hotelsContainer: {
    backgroundColor: colors.BACKGROUND_COLOR,
    margin: 10,
    flex: 1,
  },
  renderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },
  textBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.TEXT_COLOR,
    margin: 10,
  },
});
