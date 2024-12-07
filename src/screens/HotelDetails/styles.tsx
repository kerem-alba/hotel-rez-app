import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_LIGHT, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 40,
    backgroundColor: "transparent",
    position: "absolute",
    top: 10,
    zIndex: 1,
    gap: width - 72,
  },
  imageContainer: {
    height: width * 0.8,
    backgroundColor: SECONDARY_COLOR,
    alignItems: "center",
  },
  image: {
    width: width,
    height: width * 0.8,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: TEXT_LIGHT,
    margin: 5,
  },
  activeDot: {
    backgroundColor: TEXT_COLOR,
  },
  infoContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHT,
  },
  hotelName: {
    fontSize: 20,
    color: TEXT_LIGHT,
    paddingHorizontal: 10,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    gap: 5,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    textAlign: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  rating: {
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 10,
  },
  ratingText: {
    position: "absolute",
    color: TEXT_LIGHT,
    fontSize: 16,
    fontWeight: "bold",
    top: 20,
  },
  adressContainer: {
    flexDirection: "row",
    margin: 10,
  },
  adressTextContainer: {
    paddingLeft: 10,
  },

  adressText: {
    color: TEXT_LIGHT,
  },
});
