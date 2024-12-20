import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  innerContainer: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.TEXT_COLOR,
    marginBottom: 2,
  },

  headerText: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.TEXT_COLOR,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "flex-start",
  },
  column: {
    flex: 1,
  },
  divider: {
    width: 1.5,
    backgroundColor: colors.BACKGROUND_COLOR_DARKER,
    marginHorizontal: 12,
    height: "100%",
  },
  horizontalDivider: {
    width: "100%",
    height: 2,
    backgroundColor: colors.BACKGROUND_COLOR_DARKER,
    marginVertical: 10,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.TEXT_COLOR,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
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
  priceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    marginTop: 15,
    borderWidth: 1,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textLeft: {
    flex: 1,
    textAlign: "left",
  },
  textRight: {
    flex: 1,
    textAlign: "right",
    fontSize: 16,
  },
  priceLeft: {
    flex: 1,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
  },
  priceRight: {
    flex: 1,
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
  },
  priceOriginal: {
    flex: 1,
    textAlign: "center",
    textDecorationLine: "line-through",
    color: "red",
    paddingLeft: 150,
    alignSelf: "flex-end",
  },
  priceTaxText: {
    flex: 1,
    fontSize: 12,
    color: colors.TEXT_COLOR,
    textAlign: "right",
  },
  text: {
    fontSize: 16,
    color: colors.TEXT_COLOR,
    marginLeft: 15,
    textAlign: "justify",
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
  footerPriceContainer: {
    flex: 1,
    justifyContent: "center",
  },
  footerPriceText: {
    color: colors.TEXT_COLOR,
    fontSize: 16,
  },
  footerDiscountedPriceText: {
    color: "red",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: colors.TEXT_COLOR,
  },
  conditionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  conditionText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 8,
    flex: 1,
    textAlign: "justify",
  },
  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
});
