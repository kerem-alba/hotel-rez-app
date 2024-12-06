import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR, TEXT_LIGHT } from "../../utils/colors";

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
    height: 70,
    backgroundColor: BACKGROUND_COLOR,
    opacity: 0.7,
    paddingLeft: 10,
    top: 130,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    color: TEXT_LIGHT,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  city: {
    flex: 1,
    fontSize: 14,
    marginTop: 5,
    color: TEXT_LIGHT,
  },
  price: {
    paddingTop: 10,
    paddingRight: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
});
