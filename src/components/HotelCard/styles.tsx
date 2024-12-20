import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    flex: 1,
  },
  textOverlay: {
    height: 58,
    backgroundColor: colors.BACKGROUND_COLOR_CONTRAST,
    opacity: 0.7,
    paddingLeft: 50,
    top: 142,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
  },
  hotelName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.TEXT_CONTRAST,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.38,
  },
  city: {
    fontSize: 14,
    color: colors.TEXT_CONTRAST,
    marginTop: -2,
    width: 100,
  },
  price: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: colors.PRIMARY_COLOR,
  },
  priceText: {
    color: colors.TEXT_CONTRAST,
    fontSize: 12,
    position: "absolute",
    left: width * 0.38,
    marginTop: 10,
  },
  iconContainer: {
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
  },

  ratingText: {
    position: "absolute",
    color: colors.TEXT_CONTRAST,
    fontSize: 16,
    fontWeight: "bold",
    top: 10,
  },
  heartOverlay: {
    height: 36,
    width: 36,
    borderRadius: 18,
    position: "absolute",
    right: 5,
    top: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  bookmark: {
    color: colors.GREEN,
  },
});
