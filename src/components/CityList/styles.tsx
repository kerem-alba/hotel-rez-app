import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -40,
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.TEXT_COLOR,
    alignSelf: "flex-start",
  },
});
