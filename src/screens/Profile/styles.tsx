import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },

  formContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
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
    backgroundColor: colors.TEXT_COLOR,
    marginVertical: 10,
    flex: 1,
  },

  text: {
    color: colors.TEXT_COLOR,
    fontSize: 16,
    marginVertical: 10,
  },

  googleSignIn: {
    backgroundColor: colors.BACKGROUND_COLOR,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.SECONDARY_COLOR,
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
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    position: "absolute",
    top: height * 0.75,
    left: width * 0.1,
    right: width * 0.1,
    bottom: height * 0.2,
  },
  registerText: {
    color: colors.PRIMARY_COLOR,
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
    color: colors.PRIMARY_COLOR,
    fontSize: 160,
  },
  userEmailText: {
    color: colors.TEXT_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },

  profileContainer: {
    marginHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderWidth: 2,
    borderColor: colors.BACKGROUND_COLOR_DARKER,
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND_COLOR_LIGHTER,
  },
  subIcon: {
    color: colors.TEXT_COLOR,
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
    color: colors.TEXT_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: colors.TEXT_COLOR,
    fontSize: 14,
    flexShrink: 1,
  },
  logoutText: {
    marginTop: 20,
    color: colors.PRIMARY_COLOR,
    fontSize: 20,
    fontWeight: "bold",
  },
});
