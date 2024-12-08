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
    top: 40,
    zIndex: 1,
    gap: width - 72,
  },
  imageContainer: {
    height: width * 0.8,
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
    backgroundColor: TEXT_CONTRAST,
    margin: 5,
  },
  activeDot: {
    backgroundColor: TEXT_COLOR,
  },
  infoContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: BACKGROUND_COLOR_DARKER,
  },
  hotelName: {
    fontSize: 20,
    color: TEXT_COLOR,
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
    color: TEXT_CONTRAST,
    fontSize: 16,
    fontWeight: "bold",
    top: 20,
  },
  adressContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },

  adressText: {
    color: TEXT_COLOR,
  },
  map: {
    marginVertical: 10,
    width: "100%",
    height: 200,
  },
  descriptionContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: BACKGROUND_COLOR_DARKER,
  },
  description: {
    color: TEXT_COLOR,
    padding: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 80,
    paddingHorizontal: 14,
  },
  selectRoomButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 5,
    borderRadius: 10,
  },
  bookText: {
    color: TEXT_COLOR,
    fontSize: 20,
  },
  priceText: {
    color: SECONDARY_COLOR,
    fontWeight: "bold",
    fontSize: 20,
  },
});
