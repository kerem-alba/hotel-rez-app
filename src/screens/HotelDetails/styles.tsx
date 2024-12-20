import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
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
    gap: width - 85,
    paddingHorizontal: 10,
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
    backgroundColor: colors.TEXT_CONTRAST,
    margin: 5,
  },
  activeDot: {
    backgroundColor: colors.TEXT_COLOR,
  },
  infoContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
  },
  hotelName: {
    fontSize: 20,
    color: colors.TEXT_COLOR,
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
    color: colors.TEXT_CONTRAST,
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
    color: colors.TEXT_COLOR,
  },
  map: {
    marginVertical: 10,
    width: "100%",
    height: 200,
  },
  descriptionContainer: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
  },
  description: {
    color: colors.TEXT_COLOR,
    padding: 10,
    fontSize: 16,
  },
  footer: {
    backgroundColor: colors.BACKGROUND_COLOR,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 70,
    paddingHorizontal: 14,
  },
  buttonContainer: {
    width: 120,
    alignItems: "center",
  },
  priceText: {
    marginTop: 10,
    color: colors.SECONDARY_COLOR,
    fontWeight: "bold",
    fontSize: 20,
  },
  priceSubText: {
    color: colors.TEXT_COLOR,
    fontSize: 16,
    position: "absolute",
    bottom: 14,
    left: 14,
  },
});
