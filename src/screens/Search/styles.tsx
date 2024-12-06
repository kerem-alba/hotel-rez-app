import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: BACKGROUND_COLOR,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: SECONDARY_COLOR,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: TEXT_LIGHT,
    alignItems: "center",
    gap: 10,
  },
  infoContainer: {
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    flex: 1,
    borderRadius: 10,
    height: 300,
  },
  areasContainer: {
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    flex: 1,
    borderRadius: 10,
  },
  hotelsContainer: {
    backgroundColor: SECONDARY_COLOR,
    margin: 10,
    flex: 1,
    borderRadius: 10,
  },
  renderItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  textBold: {
    fontSize: 20,
    fontWeight: "bold",
    color: TEXT_COLOR,
    margin: 10,
  },
});
