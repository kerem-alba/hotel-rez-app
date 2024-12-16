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

  formContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    position: "absolute",
    top: height * 0.16,
    left: width * 0.1,
    right: width * 0.1,
    bottom: height * 0.31,
    minHeight: 400,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  horizontalDivider: {
    height: 2,
    backgroundColor: TEXT_COLOR,
    marginVertical: 10,
    flex: 1,
  },

  text: {
    color: TEXT_COLOR,
    fontSize: 16,
    marginVertical: 10,
  },

  googleSignIn: {
    backgroundColor: "white",
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: SECONDARY_COLOR,
    borderWidth: 1,
    flexDirection: "row",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  registerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    position: "absolute",
    top: height * 0.75,
    left: width * 0.1,
    right: width * 0.1,
    bottom: height * 0.2,
  },
  registerText: {
    color: PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },

  noAccessContainer: {
    flex: 1,
    marginVertical: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  topIcon: {
    color: PRIMARY_COLOR,
    fontSize: 160,
  },
  userEmailText: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },

  profileContainer: {
    marginHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 2,
    borderColor: BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
  },
  subIcon: {
    color: TEXT_COLOR,
    fontSize: 30,
    marginHorizontal: 10,
  },
  subtextContainer: {
    flexDirection: "column",
    flexShrink: 1,
    width: "100%",
    padding: 5,
  },
  subtitle: {
    color: TEXT_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: TEXT_COLOR,
    fontSize: 14,
    flexShrink: 1,
  },
  logoutText: {
    marginTop: 20,
    color: PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
});
