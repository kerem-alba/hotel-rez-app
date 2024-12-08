import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_CONTRAST, SECONDARY_COLOR, TEXT_COLOR, TEXT_CONTRAST } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: BACKGROUND_COLOR_CONTRAST,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: TEXT_CONTRAST,
    alignItems: "center",
    gap: 10,
  },
  infoContainer: {
    backgroundColor: BACKGROUND_COLOR,
    margin: 10,
    flex: 1,
    borderRadius: 10,
  },
  areasContainer: {
    backgroundColor: BACKGROUND_COLOR,
    margin: 5,
    flex: 1,
  },
  hotelsContainer: {
    backgroundColor: BACKGROUND_COLOR,
    margin: 10,
    flex: 1,
  },
  renderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 16,
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
